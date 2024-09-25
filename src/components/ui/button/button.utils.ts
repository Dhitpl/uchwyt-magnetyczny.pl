import type { Color } from '~/types'

export const getIconColor = (buttonClassNames: string): Color => {
  if (buttonClassNames.includes('text-neutral-50')) {
    return 'neutral-50'
  }

  if (buttonClassNames.includes('text-zinc-900')) {
    return 'zinc-900'
  }

  if (buttonClassNames.includes('text-red-500')) {
    return 'red-500'
  }

  return 'neutral-1000'
}
