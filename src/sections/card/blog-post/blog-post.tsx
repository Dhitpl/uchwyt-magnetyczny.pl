'use client'

import Image, { StaticImageData } from 'next/image'

import { useLocale } from 'next-intl'

import { TruncateText, Typography } from '~/components'
import { Badge } from '~/components/ui'

import { Link } from '~/i18n/routing'

export type CardBlogPostProps = {
  slug: string
  image: {
    source: StaticImageData
    alt: string
  }
  category: string
  title: string
  description: string
  date: Date
  tags?: string[]
}

export function CardBlogPost({
  slug,
  image,
  category,
  title,
  date,
  description,
  tags = [],
}: CardBlogPostProps) {
  const locale = useLocale()
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }

  const formattedTime = date.toLocaleTimeString(locale, timeOptions)
  const formattedDate = date.toLocaleDateString(locale, dateOptions)

  return (
    <Link href={`/blog/${slug}`}>
      <div className='flex flex-col w-full max-w-[330px] lg:max-w-[330px] h-96 lg:h-[400px] xl:h-[420px] 2xl:h-[430px] 3xl:h-[440px] rounded-lg border border-gray-300'>
        <div className='relative overflow-hidden rounded-t-lg basis-2/5 shrink-0'>
          <Image src={image.source} fill alt={image.alt} />
        </div>
        <div className='overflow-hidden basis-3/5 flex flex-col gap-2.5 px-2.5 py-4'>
          <div className='flex flex-col h-full overflow-hidden'>
            <Typography
              variant='headline'
              level={6}
              className='font-semibold text-red-500'
            >
              {category}
            </Typography>
            <Typography
              variant='headline'
              level={5}
              className='font-bold mb-1 2xl:mb-2'
            >
              {title}
            </Typography>
            <TruncateText>
              <Typography variant='headline' level={6}>
                {description}
              </Typography>
            </TruncateText>
          </div>
          <Typography variant='label' size='sm'>
            {`${formattedDate.split(' ')[0]} ${formattedTime}, ${formattedDate.split(' ').slice(1).join('')}`}
          </Typography>
          <div className='flex flex-wrap gap-2.5'>
            {tags.map(tag => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
