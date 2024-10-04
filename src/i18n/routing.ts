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
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing)
