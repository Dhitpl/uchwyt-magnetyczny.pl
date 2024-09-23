'use client'

import { useEffect, useState } from 'react'

import { breakpoints } from '~/styles/breakpoints'

type UseBreakpointProps = {
  breakpoint: keyof typeof breakpoints
}

export const useBreakpoint = ({ breakpoint }: UseBreakpointProps) => {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${breakpoints[breakpoint]})`,
    )

    const handleChange = () => setIsMatch(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)
    handleChange()

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [breakpoint])

  return isMatch
}
