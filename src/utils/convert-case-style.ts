type Style = 'camelCase' | 'PascalCase' | 'kebab-case' | 'snake_case'

type DetectCaseStyleProps = {
  text: string
}

export const detectCaseStyle = ({ text }: DetectCaseStyleProps): Style => {
  if (text.includes('-')) return 'kebab-case'
  if (text.includes('_')) return 'snake_case'
  if (text[0] === text[0].toUpperCase()) return 'PascalCase'
  return 'camelCase'
}

type ConvertCaseStyleProps = {
  text: string
  style: Style
}

const transformText = (
  text: string,
  regex: RegExp,
  transformFn: (match: string) => string,
) => text.replace(regex, transformFn)

const transformations: Record<Style, Record<Style, (t: string) => string>> = {
  camelCase: {
    camelCase: (t: string) => t,
    PascalCase: (t: string) => t[0].toUpperCase() + t.slice(1),
    'kebab-case': (t: string) =>
      transformText(t, /[A-Z]/g, match => `-${match.toLowerCase()}`),
    snake_case: (t: string) =>
      transformText(t, /[A-Z]/g, match => `_${match.toLowerCase()}`),
  },
  PascalCase: {
    camelCase: (t: string) => t[0].toLowerCase() + t.slice(1),
    PascalCase: (t: string) => t[0].toUpperCase() + t.slice(1), // Zawsze kapitalizuje pierwszy znak
    'kebab-case': (t: string) =>
      transformText(t, /[A-Z]/g, match => `-${match.toLowerCase()}`),
    snake_case: (t: string) =>
      transformText(t, /[A-Z]/g, match => `_${match.toLowerCase()}`),
  },
  'kebab-case': {
    camelCase: (t: string) =>
      transformText(t, /-./g, match => match[1].toUpperCase()),
    PascalCase: (t: string) =>
      t[0].toUpperCase() +
      transformText(t.slice(1), /-./g, match => match[1].toUpperCase()).replace(
        /-/g,
        '',
      ), // Kapitalizuje pierwszy znak
    'kebab-case': (t: string) => t,
    snake_case: (t: string) => t.replace(/-/g, '_'),
  },
  snake_case: {
    camelCase: (t: string) =>
      transformText(t, /_.?/g, match => match[1].toUpperCase()),
    PascalCase: (t: string) =>
      t[0].toUpperCase() +
      transformText(t.slice(1), /_.?/g, match =>
        match[1].toUpperCase(),
      ).replace(/_/g, ''), // Kapitalizuje pierwszy znak
    'kebab-case': (t: string) => t.replace(/_/g, '-'),
    snake_case: (t: string) => t,
  },
} as const

export const convertCaseStyle = ({
  text,
  style,
}: ConvertCaseStyleProps): string => {
  const currentStyle = detectCaseStyle({ text })

  return transformations[currentStyle][style](text)
}
