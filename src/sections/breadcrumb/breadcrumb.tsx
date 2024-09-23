import { useSelectedLayoutSegments } from 'next/navigation'

import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'

import { Link } from '~/i18n/routing'

import { cn } from '~/utils'

export function Breadcrumb() {
  const t = useTranslations()

  const pathSegments = ['', ...useSelectedLayoutSegments()]
  return (
    <nav>
      <ol className='flex py-2.5 px-2.5 bg-gray-200 items-center text-gray-600 rounded-md '>
        {pathSegments.map((segment, index) => {
          const path = pathSegments.slice(0, index + 1).join('/')

          const breadcrumbLabel =
            segment === ''
              ? t('page.app.home.meta.title')
              : t(`page.app.${segment}.meta.title`)

          const isLastSegment = index === pathSegments.length - 1
          return (
            <li
              key={segment}
              className='font-quicksand inline-flex items-center capitalize'
            >
              <Link href={path || '/'}>
                <Typography
                  variant='label'
                  size='md'
                  className={cn({
                    'text-neutral-1000': isLastSegment,
                  })}
                >
                  {breadcrumbLabel}
                </Typography>
              </Link>
              {isLastSegment === false && (
                <Icon
                  className='mx-2.5'
                  variant='lucide'
                  name='chevron-right'
                  size={18}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
