type LinkItem = {
  path: string
  key: string
  type: 'link'
}

type SelectItem = {
  key: string
  type: 'select'
  items: { name: string; path: string }[]
}

export type MenuItem = LinkItem | SelectItem

export type AdditionalItem = {
  path: string
  key: string
}
