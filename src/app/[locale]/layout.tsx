import { Inter as FontSans } from 'next/font/google'
import { notFound } from 'next/navigation'

import type { ReactNode } from 'react'

import { unstable_setRequestLocale } from 'next-intl/server'

import { locales } from '~/i18n'

import { NextIntlClientProvider } from '~/providers'
import type { PageProps } from '~/types'

import { cn } from '~/utils'

import '~/styles/globals.css'

type RootLayoutProps = {
  children: ReactNode
} & PageProps

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const isValidLocale = locales.some(cur => cur === locale)

  if (!isValidLocale) notFound()

  // enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale}>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </head>

      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
