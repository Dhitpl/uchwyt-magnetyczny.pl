import type dynamicLucideIcons from 'lucide-react/dynamicIconImports'

import type dynamicCustomIcons from '~/assets/icons'

export type Lucide = {
  variant: 'lucide'
  name: keyof typeof dynamicLucideIcons
}

export type Custom = {
  variant: 'custom'
  name: keyof typeof dynamicCustomIcons
}
