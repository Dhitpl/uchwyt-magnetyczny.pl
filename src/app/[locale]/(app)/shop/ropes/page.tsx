import { getTranslations } from 'next-intl/server'

import type { PageProps } from '~/types'

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.shop.ropes.meta.title')} ${t('meta.suffix')}`,
  }
}

export default function ShopRopesPage() {
  return <div>liny</div>
}
