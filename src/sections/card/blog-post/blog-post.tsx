import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '~/components'
import { Badge } from '~/components/ui'

import zdjecie from '~/assets/images/zdjecie.webp'

export type CardBlogPostProps = {
  target?: string
  category?: string
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

/**
 * Blog Post Card component to render card with different texts passed thru props, which redirect to proper blog post website.
 *
 * @param {string} [props.target] - The target route for the blog post link, typically a slug or identifier.
 * @param {string} [props.category] - The category of the blog post, displayed prominently.
 * @param {string} [props.title] - The title of the blog post, rendered as a headline.
 * @param {string} [props.date] - The publication date of the blog post, formatted as a label.
 * @param {string} [props.description] - A brief description or excerpt from the blog post.
 * @param {string[]} [props.tags=[]] - An optional array of tags associated with the blog post, displayed as badges.
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
  target,
  category,
  title,
  date,
  description,
  tags = [],
}: CardBlogPostProps) {
  return (
    <Link href={`/blog/${target}`}>
      <div className='flex flex-col w-full h-96 gap-[5px] rounded-lg border border-[#CACACA]'>
        <div className='relative overflow-hidden rounded-lg basis-1/2'>
          <Image src={zdjecie} fill alt='Picture of the author' />
        </div>
        <div className='basis-1/2 flex flex-col gap-[10px] px-[10px] py-[15px]'>
          <div className='flex flex-col'>
            <Typography>
              <div className='font-semibold text-[#C32B2B]'>{category}</div>
            </Typography>
            <Typography variant='headline' level={5}>
              <div className='font-bold'>{title}</div>
            </Typography>
            <Typography>
              <div className='font-medium'>{description}</div>
            </Typography>
          </div>
          <Typography variant='label' size='sm'>
            {date}
          </Typography>
          <div className='flex flex-wrap gap-[10px]'>
            {tags.map(tag => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
