import { convertCaseStyle } from '~/utils'

import { type Breakpoint, breakpoints } from '~/styles'

import { customIcons, lucideIcons } from './icon.const'
import type { Custom, Lucide, Size } from './icon.types'

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

type GetSizeByBreakpointProps = {
  size?: Size
  breakpoint: Breakpoint
}

/**
 * Gets the size of an element based on the current breakpoint and the provided size object.
 *
 * @param {GetSizeByBreakpointProps} props - The size and breakpoint information.
 * @returns The size for the given breakpoint or a fallback value.
 */
export const getSizeByBreakpoint = ({
  size,
  breakpoint,
}: GetSizeByBreakpointProps) => {
  if (typeof size === 'number' || size === undefined) {
    return size
  }

  const breakpointsOrder = Object.keys(breakpoints) as Breakpoint[]
  const breakpointIndex = breakpointsOrder.indexOf(breakpoint)

  if (breakpointIndex === -1) return undefined

  const closestSize = breakpointsOrder
    .slice(0, breakpointIndex + 1)
    .reverse()
    .find(bp => size[bp] !== undefined)

  return closestSize !== undefined ? size[closestSize] : undefined
}
