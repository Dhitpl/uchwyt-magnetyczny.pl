import type { ConvertCaseStyle } from '~/types'

import type { Breakpoint } from '~/styles'

import type { icons as customIcons } from '~/assets/icons'

import { lucideIcons } from './icon.const'

export type Lucide = {
  variant: 'lucide'
  name: ConvertCaseStyle<keyof typeof lucideIcons, 'kebab-case'>
}

export type Custom = {
  variant: 'custom'
  name: keyof typeof customIcons
}

type SizeValue = number

export type Size = SizeValue | { [key in Breakpoint]?: SizeValue }
