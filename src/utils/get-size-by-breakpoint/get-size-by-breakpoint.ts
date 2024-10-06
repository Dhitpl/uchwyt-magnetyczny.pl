import type { Size } from '~/types'

import { type Breakpoint, breakpoints } from '~/styles'

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

  // eslint-disable-next-line no-plusplus
  for (let i = breakpointIndex; i >= 0; i--) {
    const bp = breakpointsOrder[i]

    if (size[bp] !== undefined) {
      return size[bp]
    }
  }

  return undefined
}
