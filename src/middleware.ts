import createMiddleware from 'next-intl/middleware'

import { type Locales, defaultLocale, locales } from './i18n'
import { localePrefix, pathnames } from './navigation'

export default createMiddleware<Locales>({
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(pl|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
