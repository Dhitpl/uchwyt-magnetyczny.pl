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
    href: '/terms-and-policies/statute',
  },
  {
    key: 'policy-privacy',
    icon: {
      name: 'circle-alert',
      variant: 'lucide',
    },
    href: '/terms-and-policies/privacy',
  },
  {
    key: 'policy-cookies',
    icon: {
      name: 'cookie',
      variant: 'lucide',
    },
    href: '/terms-and-policies/cookies',
  },
]
