import Image, { StaticImageData } from 'next/image'

import { useLocale } from 'next-intl'

import { Typography } from '~/components'
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

/**
 * Blog Post Card component to render card with different texts passed thru props, which redirect to proper blog post website.
 *
 * @param [props.target] - The target route for the blog post link, typically a slug or identifier.
 * @param [props.category] - The category of the blog post, displayed prominently.
 * @param [props.title] - The title of the blog post, rendered as a headline.
 * @param [props.date] - The publication date of the blog post, formatted as a label.
 * @param [props.description] - A brief description or excerpt from the blog post.
 * @param [props.tags=[]] - An optional array of tags associated with the blog post, displayed as badges.
 *
 * @example
 * // Render a CardBlogPost component
 * <CardBlogPost
 *   target="my-first-post"
 *   category="Tech"
 *   title="Understanding TypeScript"
 *   date="September 12, 2024"
 *   description="A deep dive into the TypeScript language and its benefits."
 *   tags={['TypeScript', 'JavaScript', 'Programming']}
 * />
 */
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
      <div className='flex flex-col w-full max-w-[330px] lg:max-w-[330px] h-96 2xl:h-[440px] gap-1 rounded-lg border border-[#CACACA]'>
        <div className='relative overflow-hidden rounded-t-lg basis-1/2'>
          <Image src={image.source} fill alt={image.alt} />
        </div>
        <div className='basis-1/2 flex flex-col gap-2.5 px-2.5 py-4'>
          <div className='flex flex-col'>
            <Typography className='font-semibold text-[#C32B2B]'>
              {category}
            </Typography>
            <Typography variant='headline' level={5} className='font-bold'>
              {title}
            </Typography>
            <Typography className='font-medium'>{description}</Typography>
          </div>
          <Typography variant='label' size='sm' className='mt-auto'>
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
