import type { FooterLink } from './footer.types'

export const infoLinks: FooterLink[] = [
  {
    key: 'faq',
    icon: {
      name: 'message-circle-question',
      variant: 'lucide',
    },
    href: '/faq',
  },
  {
    key: 'contact',
    icon: {
      name: 'mail',
      variant: 'lucide',
    },
    href: '/contact',
  },
  {
    key: 'blog',
    icon: {
      name: 'file-text',
      variant: 'lucide',
    },
    href: '/blog',
  },
]

export const legalLinks: FooterLink[] = [
  {
    key: 'statute',
    icon: {
      name: 'file-text',
      variant: 'lucide',
    },
    href: '/statute',
  },
  {
    key: 'policy-privacy',
    icon: {
      name: 'circle-alert',
      variant: 'lucide',
    },
    href: '/privacy-policy',
  },
  {
    key: 'policy-cookies',
    icon: {
      name: 'cookie',
      variant: 'lucide',
    },
    href: '/cookies-policy',
  },
]
