import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pl', 'en'],

  // Used when no locale matches
  defaultLocale: 'pl',

  // Add the locale prefix only when it's not the default locale
  localePrefix: 'as-needed',

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
      pl: '/magnesy',
      en: '/magnets',
    },
    '/handles': {
      pl: '/uchwyty',
      en: '/handles',
    },
    '/rope': {
      pl: '/liny',
      en: '/rope',
    },
    '/accessories': {
      pl: '/akcesoria',
      en: '/accessories',
    },
  },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
