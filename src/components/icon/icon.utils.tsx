import { convertCaseStyle } from '~/utils'

import { customIcons, lucideIcons } from './icon.const'
import type { Custom, Lucide } from './icon.types'

type GetIconComponentProps = Lucide | Custom

/**
 * Retrieves the correct icon component based on the variant type.
 *
 * @param {GetIconComponentProps} props - The icon properties, either Lucide or Custom.
 * @returns The corresponding icon component or a null function if not found.
 */
export const getIconComponent = (props: GetIconComponentProps) => {
  if (props.variant === 'lucide') {
    const name = convertCaseStyle({
      style: 'PascalCase',
      text: props.name,
    }) as keyof typeof lucideIcons

    return lucideIcons[name] ?? (() => null)
  }

  if (props.variant === 'custom') {
    return customIcons[props.name] ?? (() => null)
  }

  return () => null
}
