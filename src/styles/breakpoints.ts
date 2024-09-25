export const breakpoints = {
  xs: '0px',
  sm: '375px',
  md: '576px',
  lg: '768px',
  xl: '991px',
  '2xl': '1200px',
  '3xl': '1440px',
} as const

export type Breakpoint = keyof typeof breakpoints
