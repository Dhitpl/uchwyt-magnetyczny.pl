import type { TypographyProps } from './typography'
import { defaultTypographyVariant } from './typography.const'
import type { TypographyVariants } from './typography.types'

export const getDefaultTag = (
  props: TypographyProps,
): keyof HTMLElementTagNameMap => {
  if (props.variant === 'headline') {
    return props.tag || `h${props.level}`
  }

  return props.tag || 'p'
}

export const getTypographyVariant = (
  props: TypographyProps,
): TypographyVariants => {
  if (props.variant === 'headline') {
    return `headline-${props.level}`
  }

  if (props.variant === 'body' || props.variant === 'label') {
    return `${props.variant}-${props.size || 'md'}`
  }

  return defaultTypographyVariant
}
