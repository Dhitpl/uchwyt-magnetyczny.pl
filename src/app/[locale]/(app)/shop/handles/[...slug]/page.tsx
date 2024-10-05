import { getTranslations } from 'next-intl/server'

import type { PagePropsWithSlug } from '~/types'

export async function generateMetadata({
  params: { locale },
}: PagePropsWithSlug) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.shop.handles.product.meta.title')} ${t('meta.suffix')}`,
  }
}

export default function ShopHandlesProductPage({ params }: PagePropsWithSlug) {
  return <div>uchwyt: {params.slug}</div>
}
