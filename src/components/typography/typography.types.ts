import { VariantProps } from 'class-variance-authority'

import type { typographyVariants } from './typography.const'

export type Size = 'sm' | 'md' | 'lg'

export type Body = {
  variant: 'body'
  size?: Size
}

export type Button = {
  variant: 'button'
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

// TODO: consider different name for this type, it's confusing because variant is 'body' or 'button' or 'headline' or 'label'
export type TypographyVariants = VariantProps<
  typeof typographyVariants
>['variant']
