'use client'

import Image, { StaticImageData } from 'next/image'

import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

import { Icon } from '~/components'
import { Button } from '~/components/ui'

import { Link } from '~/i18n/routing'

type CardProductProps = {
  slug: string
  name: string
  rating: number
  ratingAmount: number
  power: string
  diameter: string
  height: string
  material: string
  price: string
  image: StaticImageData
}

export function CardProduct({
  slug,
  name,
  rating,
  ratingAmount,
  power,
  diameter,
  height,
  material,
  price,
  image,
}: CardProductProps) {
  const t = useTranslations()

  const getStars = (productRating: number) => {
    const fullStars = Math.floor(productRating)
    const hasHalfStar = productRating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <Icon
            key={`full-${index + 1}`}
            variant='custom'
            name='star'
            color='red-500'
            size={15}
          />
        ))}

        {hasHalfStar && (
          <Icon
            key='half'
            variant='custom'
            name='starHalf'
            color='red-500'
            size={15}
          />
        )}

        {Array.from({ length: emptyStars }, (_, index) => (
          <Icon
            key={`empty-${fullStars + (hasHalfStar ? 1 : 0) + index + 1}`}
            variant='custom'
            name='starEmpty'
            color='red-500'
            size={15}
          />
        ))}
      </>
    )
  }

  const succesSonner = () => {
    toast.success('Produkt dodany do koszyka', {
      classNames: {
        success: 'bg-green-100 border-green-600',
        title: 'text-green-800',
      },
      action: {
        label: 'cofnij',
      },
      actionButtonStyle: {
        backgroundColor: '#15803d',
      },
      icon: (
        <Icon
          variant='lucide'
          name='circle-check'
          color='green-700'
          size={20}
          className='text-neutral-1000 '
        />
      ),
    })
  }
  const errorSonner = () => {
    toast.success('Błąd przy dodawaniu do koszyka', {
      classNames: {
        success: 'bg-red-100 border-red-600',
        title: 'text-red-800',
      },
      action: {
        label: 'zamknij',
      },
      actionButtonStyle: {
        backgroundColor: '#dc2626',
      },
      icon: (
        <Icon
          variant='lucide'
          name='circle-alert'
          color='red-700'
          size={20}
          className='text-neutral-1000 '
        />
      ),
    })
  }

  const handleAddToBasket = () => {
    succesSonner()
    errorSonner()
  }

  return (
    <div className='flex flex-col w-[332px] gap-[3px] border-b-[0.5px] border-neutral-200 pb-3 my-10 mx-10'>
      <Link href={`/products/${slug}`}>
        <Image
          src={image}
          alt={name}
          width={332}
          height={332}
          className='pb-1'
        />
        <div className='text-lg font-quicksand font-bold overflow-hidden text-ellipsis whitespace-nowrap px-2'>
          {name}
        </div>
        <div className='flex flex-row gap-[3px] items-center px-2 pb-2'>
          {getStars(rating)}
          <div className='text-[14px] font-bold font-quicksand leading-3'>
            {rating} ({ratingAmount})
          </div>
        </div>
        <div className='text-[16px] font-quicksand px-2 capitalize'>
          {t('product.description.power')}:{' '}
          <span className='font-medium'>{power}</span>
        </div>
        <div className='text-[16px] font-quicksand px-2 capitalize'>
          {t('product.description.diameter')}:{' '}
          <span className='font-medium'>{diameter}</span>
        </div>
        <div className='text-[16px] font-quicksand px-2 capitalize'>
          {t('product.description.height')}:{' '}
          <span className='font-medium'>{height}</span>
        </div>
        <div className='text-[16px] font-quicksand pb-2 px-2 capitalize'>
          {t('product.description.material')}:{' '}
          <span className='font-medium'>{material}</span>
        </div>
      </Link>
      <div className='flex flex-row justify-between items-end h-7 px-2'>
        <div className='font-bold font-quicksand text-[18px]'>{price}</div>
        <Button
          variant='destructive'
          size='icon'
          className='bg-neutral-0 border-red-500 border w-10 h-10 lg:h-10 lg:w-10 hover:bg-red-500'
          onClick={handleAddToBasket}
        >
          <Icon
            variant='custom'
            name='shoppingCart'
            color='red-500'
            size={30}
            className='text-neutral-1000'
          />
        </Button>
      </div>
    </div>
  )
}
