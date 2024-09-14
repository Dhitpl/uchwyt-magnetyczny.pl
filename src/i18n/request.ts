import { notFound } from 'next/navigation'

import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!(routing.locales as unknown as string[]).includes(locale)) notFound()

  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})
