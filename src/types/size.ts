import type { Breakpoint } from '~/styles'

type SizeValue = number

export type Size = SizeValue | { [key in Breakpoint]?: SizeValue }
