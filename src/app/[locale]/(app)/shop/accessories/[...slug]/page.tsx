import { getTranslations } from 'next-intl/server'

import type { PagePropsWithSlug } from '~/types'

export async function generateMetadata({
  params: { locale },
}: PagePropsWithSlug) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.shop.accessories.product.meta.title')} ${t('meta.suffix')}`,
  }
}

export default function ShopAccessoriesProductPage({
  params,
}: PagePropsWithSlug) {
  return <div>akcesorium: {params.slug}</div>
}
