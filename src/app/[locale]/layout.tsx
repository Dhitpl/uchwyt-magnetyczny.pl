import { Quicksand as FontQuicksand } from 'next/font/google'

import type { ReactNode } from 'react'

import { Provider } from 'jotai'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import type { PageProps } from '~/types'

import { cn } from '~/utils'

import '~/styles/globals.css'

type RootLayoutProps = {
  children: ReactNode
} & PageProps

const fontQuicksand = FontQuicksand({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-quicksand',
})

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages()

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
          'min-h-screen bg-background antialiased',
          fontQuicksand.variable,
        )}
      >
        <Provider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  )
}
