import { getTranslations } from 'next-intl/server'

import { Typography } from '~/components'
import { Button } from '~/components/ui'

import type { PageProps } from '~/types'

export async function generateMetadata({ params: { locale } }: PageProps) {
  const t = await getTranslations({
    locale,
  })

  return {
    title: `${t('page.app.home.meta.title')} ${t('meta.suffix')}`,
  }
}

const buttonVariants = ['default', 'destructive', 'ghost', 'link'] as const
const icon = { variant: 'lucide', name: 'home' } as const

export default function HomePage() {
  return (
    <div className='p-2'>
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

        {buttonVariants.map(variant => (
          <div className='flex gap-2 flex-wrap' key={variant}>
            <Button variant={variant}>Button</Button>

            <Button variant={variant} disabled>
              Button
            </Button>

            <Button variant={variant} isLoading>
              Button
            </Button>

            <Button variant={variant} prefixIcon={icon}>
              Button
            </Button>

            <Button variant={variant} suffixIcon={icon}>
              Button
            </Button>

            <Button variant={variant} prefixIcon={icon} isLoading>
              Button
            </Button>

            <Button variant={variant} suffixIcon={icon} isLoading>
              Button
            </Button>

            <Button
              variant={variant}
              prefixIcon={icon}
              suffixIcon={icon}
              isLoading
            >
              Button
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
