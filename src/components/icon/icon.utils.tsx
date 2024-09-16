import { lazy } from 'react'

import dynamicLuicideIcons from 'lucide-react/dynamicIconImports'

import dynamicCustomIcons from '~/assets/icons'

import type { Custom, Luicide } from './icon.types'

type GetIconComponentProps = Luicide | Custom

export const getIconComponent = (props: GetIconComponentProps) => {
  if (props.variant === 'luicide') {
    return lazy(dynamicLuicideIcons[props.name])
  }

  if (props.variant === 'custom') {
    return lazy(dynamicCustomIcons[props.name])
  }

  return () => null
}
