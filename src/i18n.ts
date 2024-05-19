import { type useTranslations } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['pl', 'en'] as const

export const defaultLocale = locales[0]

export type Locale = (typeof locales)[number]

export type Locales = typeof locales

export type TranslateFunction = ReturnType<typeof useTranslations<string>>

export default getRequestConfig(async ({ locale }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  messages: (await import(`./locales/${locale}.json`)).default,
}))
