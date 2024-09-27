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
      <ol className='flex py-2.5 px-2.5 bg-gray-200 items-center text-gray-600 rounded-md gap-2.5'>
        {pathSegments.map((segment, index) => {
          const path = pathSegments.slice(0, index + 1).join('/')

          const key = segment || 'home'

          const label = t(`page.app.${key}.meta.title`)

          const isLastSegment = index === pathSegments.length - 1

          return (
            <li
              key={key}
              className='font-quicksand inline-flex items-center capitalize gap-2.5'
            >
              <Link href={path || '/'}>
                <Typography
                  variant='label'
                  size='md'
                  className={cn({
                    'text-neutral-1000': isLastSegment,
                  })}
                >
                  {label}
                </Typography>
              </Link>
              {isLastSegment === false && (
                <Icon variant='lucide' name='chevron-right' size={18} />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
