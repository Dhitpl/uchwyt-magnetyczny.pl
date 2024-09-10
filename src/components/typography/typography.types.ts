export type Size = 'sm' | 'md' | 'lg'

export type Display = {
  variant: 'display'
  size?: Size
}

export type Headline = {
  variant: 'headline'
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export type Label = {
  variant: 'label'
  size?: Size
}

export type DefaultVariant = {
  variant?: undefined
  size?: undefined
}
