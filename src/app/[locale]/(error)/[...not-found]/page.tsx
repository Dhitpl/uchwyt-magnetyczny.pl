import { getTranslations } from 'next-intl/server'

import type { PageProps } from '~/types'

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.error.not-found.meta.title')} ${t('meta.suffix')}`,
  }
}

export default function NotFound() {
  return <div>404</div>
}
