import {
  type Pathnames,
  createLocalizedPathnamesNavigation,
} from 'next-intl/navigation'

import { type Locales, locales } from './i18n'

export const localePrefix = 'as-needed'

export const pathnames = {
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
} satisfies Pathnames<Locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
