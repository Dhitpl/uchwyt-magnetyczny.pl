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
    '/statute': {
      pl: '/regulamin',
      en: '/statute',
    },
  },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
