import { getTranslations } from 'next-intl/server'

import type { PagePropsWithSlug } from '~/types'

export async function generateMetadata({
  params: { locale },
}: PagePropsWithSlug) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.blog.post.meta.title')} ${t('meta.suffix')}`,
  }
}

export default function BlogPostPage({ params }: PagePropsWithSlug) {
  return <div>artykuł: {params.slug}</div>
}
