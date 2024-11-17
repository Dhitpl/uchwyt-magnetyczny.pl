import type { Href } from '~/i18n/types'

type LinkItem = {
  key: string
  href: Href
  type: 'link'
}

type SelectItem = {
  items: { key: string; href: Href }[]
  key: string
  type: 'select'
}

export type MenuItem = LinkItem | SelectItem

export type AdditionalItem = {
  key: string
  href: Href
}
