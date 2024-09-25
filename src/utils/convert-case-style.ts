type Style = 'camelCase' | 'PascalCase' | 'kebab-case' | 'snake_case'

type DetectCaseStyleProps = {
  text: string
}

/**
 * Detects the case style of a given string.
 *
 * @param {string} str - The string to detect the case style of.
 * @returns {'camelCase' | 'PascalCase' | 'snake_case' | 'kebab-case' | 'unknown'} - The detected case style.
 */
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
    PascalCase: (t: string) => t[0].toUpperCase() + t.slice(1),
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
      ),
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
      ).replace(/_/g, ''),
    'kebab-case': (t: string) => t.replace(/_/g, '-'),
    snake_case: (t: string) => t,
  },
} as const

/**
 * Converts a string from one case style to another.
 *
 * @param {string} str - The string to convert.
 * @param {'camelCase' | 'PascalCase' | 'snake_case' | 'kebab-case'} from - The current case style of the string.
 * @param {'camelCase' | 'PascalCase' | 'snake_case' | 'kebab-case'} to - The target case style to convert the string to.
 * @returns {string} - The converted string.
 */
export const convertCaseStyle = ({
  text,
  style,
}: ConvertCaseStyleProps): string => {
  const currentStyle = detectCaseStyle({ text })

  return transformations[currentStyle][style](text)
}
