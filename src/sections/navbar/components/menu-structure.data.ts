import type { AdditionalItem, MenuItem } from './menu-structure.types'

export const menuStructure: MenuItem[] = [
  {
    path: '/shop',
    key: 'shop',
    type: 'link',
  },
  {
    key: 'category',
    type: 'select',
    items: [
      { name: 'magnets', path: '/magnets' },
      { name: 'handles', path: '/handles' },
      { name: 'ropes', path: '/ropes' },
      { name: 'accessories', path: '/accessories' },
    ],
  },
  {
    path: '/tutorial',
    key: 'tutorial',
    type: 'link',
  },
  {
    path: '/blog',
    key: 'blog',
    type: 'link',
  },
  {
    path: '/contact',
    key: 'contact',
    type: 'link',
  },
] as const

export const additionalMenuStructure: AdditionalItem[] = [
  {
    path: '/rules',
    key: 'rules',
  },
  {
    path: '/faq',
    key: 'faq',
  },
] as const
