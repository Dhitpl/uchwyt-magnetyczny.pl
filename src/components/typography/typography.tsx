import type { ReactNode } from 'react'

import { typographyVariants } from './typography.const'
import type {
  DefaultVariant,
  Display,
  Headline,
  Label,
} from './typography.types'
import { getDefaultTag, getTypographyVariant } from './typography.utils'

export type TypographyProps = {
  children?: ReactNode
  className?: HTMLElement['className']
  tag?:
    | 'p'
    | 'span'
    | 'small'
    | 'div'
    | 'blockquote'
    | 'code'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
} & (Display | Headline | Label | DefaultVariant)

/**
 * Typography component to render text with different styles based on the variant.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} [props.children] - The content to be rendered inside the typography component.
 * @param {'p' | 'span' | 'small' | 'div' | 'blockquote' | 'code' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [props.tag] - The HTML tag to be used for rendering the text.
 * @param {string} [props.variant] - The variant of the typography. Can be 'headline', 'display', 'label', or undefined.
 * @param {number} [props.level] - The level of the headline variant (e.g., 1 for h1, 2 for h2, etc.).
 * @param {string} [props.size] - The size of the display or label variant. Defaults to 'md'.
 * @returns {JSX.Element} The rendered typography component.
 *
 * @example
 * // Render a headline
 * <Typography variant="headline" level={1}>This is a headline</Typography>
 *
 * @example
 * // Render a display text
 * <Typography variant="display" size="lg">This is a display text</Typography>
 *
 * @example
 * // Render a label
 * <Typography variant="label" size="sm">This is a label</Typography>
 *
 * @example
 * // Render a paragraph with default variant
 * <Typography tag="p">This is a paragraph</Typography>
 */
export function Typography({ children, className, ...props }: TypographyProps) {
  const Tag = props.tag || getDefaultTag(props)

  const variant = getTypographyVariant(props)

  return (
    <Tag
      className={typographyVariants({
        variant,
        className,
      })}
    >
      {children}
    </Tag>
  )
}
