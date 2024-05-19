import type { ReactNode } from 'react'

import { NextIntlClientProvider as NextIntlClientProviderRaw } from 'next-intl'

import getMessages from '~/i18n'

type NextIntlClientProviderProps = {
  locale: string
  children: ReactNode
}

export async function NextIntlClientProvider({
  locale,
  children,
}: NextIntlClientProviderProps) {
  const { messages } = await getMessages({ locale })

  return (
    <NextIntlClientProviderRaw locale={locale} messages={messages}>
      {children}
    </NextIntlClientProviderRaw>
  )
}
