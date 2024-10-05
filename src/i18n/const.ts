import type { Pathnames } from 'next-intl/routing'
import { LocalePrefix } from 'next-intl/routing'

export const locales: string[] = ['pl', 'en'] as const

export const defaultLocale: (typeof locales)[number] = 'pl'

export const localePrefix: LocalePrefix = 'as-needed'

export const pathnames = {
  '/': {
    en: '/',
    pl: '/',
  },
  '/blog': {
    en: '/blog',
    pl: '/blog',
  },
  '/blog/:slug': {
    en: '/blog/:slug',
    pl: '/blog/:slug',
  },
  '/contact': {
    en: '/contact',
    pl: '/kontakt',
  },
  '/faq': {
    en: '/frequently-asked-questions',
    pl: '/czesto-zadawane-pytania',
  },
  '/order': {
    en: '/order',
    pl: '/zamowienie',
  },
  '/order/delivery-and-payment': {
    en: '/order/delivery-and-payment',
    pl: '/zamowienie/dostawa-i-platnosc',
  },
  '/order/shopping-cart': {
    en: '/order/shopping-cart',
    pl: '/zamowienie/koszyk',
  },
  '/order/status': {
    en: '/order/status',
    pl: '/zamowienie/status',
  },
  '/order/summary': {
    en: '/order/summary',
    pl: '/zamowienie/podsumowanie',
  },
  '/shop': {
    en: '/shop',
    pl: '/sklep',
  },
  '/shop/accessories': {
    en: '/shop/accessories',
    pl: '/sklep/akcesoria',
  },
  '/shop/accessories/:slug': {
    en: '/shop/accessories/:slug',
    pl: '/sklep/akcesoria/:slug',
  },
  '/shop/handles': {
    en: '/shop/handles',
    pl: '/sklep/uchwyty',
  },
  '/shop/handles/:slug': {
    en: '/shop/handles/:slug',
    pl: '/sklep/uchwyty/:slug',
  },
  '/shop/magnets': {
    en: '/shop/magnets',
    pl: '/sklep/magnesy',
  },
  '/shop/magnets/:slug': {
    en: '/shop/magnets/:slug',
    pl: '/sklep/magnesy/:slug',
  },
  '/shop/ropes': {
    en: '/shop/ropes',
    pl: '/sklep/liny',
  },
  '/shop/ropes/:slug': {
    en: '/shop/ropes/:slug',
    pl: '/sklep/liny/:slug',
  },
  '/terms-and-policies': {
    en: '/terms-and-policies',
    pl: '/warunki-i-zasady',
  },
  '/terms-and-policies/cookies': {
    en: '/terms-and-policies/cookies',
    pl: '/warunki-i-zasady/polityka-cookies',
  },
  '/terms-and-policies/privacy': {
    en: '/terms-and-policies/policy-privacy',
    pl: '/warunki-i-zasady/polityka-prywatnosci',
  },
  '/terms-and-policies/statute': {
    en: '/terms-and-policies/statute',
    pl: '/warunki-i-zasady/regulamin',
  },
  '/tutorial': {
    en: '/tutorial',
    pl: '/poradnik',
  },
} as const satisfies Pathnames<typeof locales>
