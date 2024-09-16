import type dynamicLuicideIcons from 'lucide-react/dynamicIconImports'

import type dynamicCustomIcons from '~/assets/icons'

export type Luicide = {
  variant: 'luicide'
  name: keyof typeof dynamicLuicideIcons
}

export type Custom = {
  variant: 'custom'
  name: keyof typeof dynamicCustomIcons
}
