import type { AdditionalItem, MenuItem } from './menu-structure.types'

export const menuStructure: MenuItem[] = [
  {
    key: 'shop',
    type: 'select',
    items: [
      { key: 'magnets', href: '/shop/magnets' },
      { key: 'handles', href: '/shop/handles' },
      { key: 'ropes', href: '/shop/ropes' },
      { key: 'accessories', href: '/shop/accessories' },
    ],
  },
  {
    href: '/tutorial',
    key: 'tutorial',
    type: 'link',
  },
  {
    href: '/blog',
    key: 'blog',
    type: 'link',
  },
  {
    href: '/contact',
    key: 'contact',
    type: 'link',
  },
] as const

export const additionalMenuStructure: AdditionalItem[] = [
  {
    href: '/terms-and-policies/statute',
    key: 'statute',
  },
  {
    href: '/faq',
    key: 'faq',
  },
] as const
