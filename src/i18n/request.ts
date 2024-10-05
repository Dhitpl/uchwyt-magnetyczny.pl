import { notFound } from 'next/navigation'

import { getRequestConfig } from 'next-intl/server'

import { locales } from './const'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound()

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})
