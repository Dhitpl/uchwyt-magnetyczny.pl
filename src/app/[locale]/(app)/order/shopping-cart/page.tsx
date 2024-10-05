import { getTranslations } from 'next-intl/server'

import type { PageProps } from '~/types'

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.order.shoppingCart.meta.title')} ${t('meta.suffix')}`,
  }
}

export default function OrderShoppingCartPage() {
  return <div>koszyk</div>
}
