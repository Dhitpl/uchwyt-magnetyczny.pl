import { getTranslations } from 'next-intl/server'

import { Typography } from '~/components'

import type { PageProps } from '~/types'

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
    <div className='flex flex-col gap-2'>
      <Typography variant='headline' level={1}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='headline' level={2}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='headline' level={3}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='headline' level={4}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='headline' level={5}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='headline' level={6}>
        The quick brown fox jumps over the lazy dog
      </Typography>

      <Typography variant='body' size='lg'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='body' size='md'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='body' size='sm'>
        The quick brown fox jumps over the lazy dog
      </Typography>

      <Typography variant='label' size='lg'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='label' size='md'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant='label' size='sm'>
        The quick brown fox jumps over the lazy dog
      </Typography>

      <Typography variant='button'>
        The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  )
}
