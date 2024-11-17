import type { IconProps } from '~/components'

import type { Pathname } from '~/i18n/types'

export type FooterLink = {
  key: string
  icon: IconProps
  href: Pathname
}
