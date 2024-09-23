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

      <div className='flex gap-2 flex-wrap'>
        <Button>Button</Button>
        <Button variant='destructive'>Button</Button>
        <Button variant='link'>Button</Button>

        <Button prefixIcon={{ variant: 'lucide', name: 'home' }}>Button</Button>
        <Button suffixIcon={{ variant: 'lucide', name: 'home' }}>Button</Button>
        <Button
          prefixIcon={{ variant: 'lucide', name: 'home' }}
          suffixIcon={{ variant: 'lucide', name: 'home' }}
        >
          Button
        </Button>

        <Button isLoading>Button</Button>
        <Button isLoading variant='destructive'>
          Button
        </Button>
        <Button isLoading variant='link'>
          Button
        </Button>

        <Button
          isLoading
          prefixIcon={{ variant: 'lucide', name: 'home' }}
          disabled
        >
          Button
        </Button>
        <Button
          isLoading
          suffixIcon={{ variant: 'lucide', name: 'home' }}
          disabled
        >
          Button
        </Button>
        <Button
          isLoading
          prefixIcon={{ variant: 'lucide', name: 'home' }}
          suffixIcon={{ variant: 'lucide', name: 'home' }}
          variant='link'
          disabled
        >
          Button
        </Button>

        <Button
          size='icon'
          prefixIcon={{
            name: 'home',
            variant: 'lucide',
          }}
        />
        <Button
          size='icon'
          prefixIcon={{
            name: 'home',
            variant: 'lucide',
          }}
          isLoading
        />
        <Button
          size='icon'
          prefixIcon={{
            name: 'home',
            variant: 'lucide',
          }}
          disabled
        />
      </div>
    </div>
  )
}
