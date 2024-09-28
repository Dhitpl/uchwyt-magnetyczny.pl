import { getTranslations } from 'next-intl/server'
import { Toaster } from 'sonner'

import { CardProduct } from '~/sections'
import type { PageProps } from '~/types'

import magnet from '~/assets/images/magnet.png'

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.home.meta.title')} ${t('meta.suffix')}`,
  }
}

export default function HomePage() {
  return (
    <div className='flex flex-row p-2'>
      <Toaster position='top-right' />
      <CardProduct
        slug='magnet-f200-with-handle'
        name='Magnes F200 z uchwytem'
        rating={4.7}
        ratingAmount={100}
        power='100kg'
        diameter='12cm'
        height='1cm'
        material='N25'
        price='110zł'
        image={magnet}
      />
      <CardProduct
        slug='magnet-g220-with-handle'
        name='Magnes G220 z uchwytem'
        rating={5}
        ratingAmount={55}
        power='20kg'
        diameter='5cm'
        height='2cm'
        material='M3'
        price='20zł'
        image={magnet}
      />
      <CardProduct
        slug='magnet-h50-with-handle'
        name='Magnes H50 z uchwytem'
        rating={2.2}
        ratingAmount={30}
        power='5kg'
        diameter='20cm'
        height='3cm'
        material='Z12'
        price='55zł'
        image={magnet}
      />
    </div>
  )
}
