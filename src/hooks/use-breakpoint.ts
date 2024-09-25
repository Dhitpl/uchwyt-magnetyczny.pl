'use client'

import { useEffect, useMemo, useState } from 'react'

import { type Breakpoint, breakpoints } from '~/styles'

type UseIsBreakpointProps = {
  breakpoint: Breakpoint
}

/**
 * Custom hook to determine if the current window width matches a specified breakpoint.
 *
 * @param {UseIsBreakpointProps} props - The properties object.
 * @param {Breakpoint} props.breakpoint - The breakpoint to match against.
 * @returns {boolean} - A boolean indicating if the current window width matches the specified breakpoint.
 */
export const useIsBreakpoint = ({ breakpoint }: UseIsBreakpointProps) => {
  const mediaQuery = useMemo(
    () => window.matchMedia(`(min-width: ${breakpoints[breakpoint]})`),
    [breakpoint],
  )

  const [isMatch, setIsMatch] = useState(mediaQuery.matches)

  useEffect(() => {
    const handleChange = () => {
      if (mediaQuery.matches !== isMatch) {
        setIsMatch(mediaQuery.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mediaQuery, isMatch])

  return isMatch
}

/**
 * Custom hook to get the current breakpoint based on the window width.
 *
 * @returns {Breakpoint} - The current breakpoint.
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs')

  useEffect(() => {
    const breakpointsKeys = Object.keys(breakpoints) as Breakpoint[]
    let resizeTimeout: NodeJS.Timeout | null = null

    const getBreakpoint = () => {
      const newBreakpoint = breakpointsKeys
        .reverse()
        .find(
          key => window.matchMedia(`(min-width: ${breakpoints[key]})`).matches,
        )

      if (newBreakpoint && newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint)
      }
    }

    // Debouncing resize event to improve performance
    const handleResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      resizeTimeout = setTimeout(getBreakpoint, 150)
    }

    getBreakpoint()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
    }
  }, [breakpoint])

  return breakpoint
}
