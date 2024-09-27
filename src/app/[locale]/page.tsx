import { getTranslations } from 'next-intl/server'

import { Typography } from '~/components'
import { Button } from '~/components/ui'

import { CardBlogPost } from '~/sections'
import type { PageProps } from '~/types'

import landscape from '~/assets/images/zdjecie.webp'

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
    <div className='p-2 flex flex-col gap-2'>
      <div className='flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:px-44 lg:py-7'>
        <CardBlogPost
          slug='znalezisko-wylowione-magnesem'
          image={{
            source: landscape,
            alt: 'landscape',
          }}
          category='Znaleziska'
          title='Znalezisko Wyłowione Magnesem'
          description='Podczas poszukiwań z użyciem uchwytu magnetycznego wyłowiliśmy stary, zardzewiały klucz, najprawdopodobniej z początku XX wieku.'
          date={new Date(2024, 10, 7, 18, 0)}
          tags={['#Znaleziska', '#Magnes', '#Łowienie']}
        />
        <CardBlogPost
          slug='zabytkowy-pistolet-ukryty-w-glebinach'
          image={{
            source: landscape,
            alt: 'landscape',
          }}
          category='Znaleziska'
          title='Zabytkowy Pistolet Ukryty w Głębinach'
          description='Podczas ostatnich poszukiwań z użyciem magnesu wyłowiliśmy zabytkowy pistolet, spoczywający w wodzie przez wiele lat.'
          date={new Date(2024, 10, 7, 18, 0)}
          tags={['#Znaleziska', '#Broń', '#Zabytek']}
        />
        <CardBlogPost
          slug='zabytkowy-pistolet-ukryty-w-glebinach'
          image={{
            source: landscape,
            alt: 'landscape',
          }}
          category='Znaleziska'
          title='Zabytkowy Pistolet Ukryty w Głębinach'
          description='Podczas ostatnich poszukiwań z użyciem magnesu wyłowiliśmy zabytkowy pistolet, spoczywający w wodzie przez wiele lat.'
          date={new Date(2024, 10, 7, 18, 0)}
          tags={['#Znaleziska', '#Broń', '#Zabytek']}
        />
        <CardBlogPost
          slug='zabytkowy-pistolet-ukryty-w-glebinach'
          image={{
            source: landscape,
            alt: 'landscape',
          }}
          category='Znaleziska'
          title='Zabytkowy Pistolet Ukryty w Głębinach'
          description='Podczas ostatnich poszukiwań z użyciem magnesu wyłowiliśmy zabytkowy pistolet, spoczywający w wodzie przez wiele lat.'
          date={new Date(2024, 10, 7, 18, 0)}
          tags={['#Znaleziska', '#Broń', '#Zabytek']}
        />
      </div>

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
