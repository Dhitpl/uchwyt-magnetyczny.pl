import { lazy } from 'react'

import dynamicLucideIcons from 'lucide-react/dynamicIconImports'

import dynamicCustomIcons from '~/assets/icons'

import type { Custom, Lucide } from './icon.types'

type GetIconComponentProps = Lucide | Custom

export const getIconComponent = (props: GetIconComponentProps) => {
  if (props.variant === 'lucide') {
    return lazy(dynamicLucideIcons[props.name])
  }

  if (props.variant === 'custom') {
    return lazy(dynamicCustomIcons[props.name])
  }

  return () => null
}
