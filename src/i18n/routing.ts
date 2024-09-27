import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

import { defaultLocale, localePrefix, locales, pathnames } from './const'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Add the locale prefix only when it's not the default locale
  localePrefix,

  // Routes mapping
  pathnames: {
    '/': {
      pl: '/',
      en: '/',
    },
    '/blog': {
      pl: '/blog',
      en: '/blog',
    },
    '/contact': {
      pl: '/kontakt',
      en: '/contact',
    },
    '/shop': {
      pl: '/sklep',
      en: '/shop',
    },
    '/tutorial': {
      pl: '/poradnik',
      en: '/tutorial',
    },
    '/cart': {
      pl: '/koszyk',
      en: '/cart',
    },
    '/faq': {
      pl: '/faq',
      en: '/faq',
    },
    '/rules': {
      pl: '/regulamin',
      en: '/rules',
    },
    '/magnets': {
      pl: '/sklep/magnesy',
      en: '/shop/magnets',
    },
    '/handles': {
      pl: '/sklep/uchwyty',
      en: '/shop/handles',
    },
    '/rope': {
      pl: '/sklep/liny',
      en: '/shop/ropes',
    },
    '/accessories': {
      pl: '/sklep/akcesoria',
      en: '/shop/accessories',
    },
  },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
  permanentRedirect,
} = createNavigation(routing)
