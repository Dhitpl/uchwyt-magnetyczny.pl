import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import { useTranslations } from 'next-intl'

import { Icon, Typography } from '~/components'

export function Breadcrumb() {
  const segments = useSelectedLayoutSegments()

  const pathSegments = ['', ...segments]
  const t = useTranslations()
  return (
    <nav>
      <ol className='flex py-2.5 px-2.5 bg-[#EDEDED] items-center text-[#525252] rounded-md '>
        {pathSegments.map((segment, index) => {
          const breadcrumbPath = pathSegments.slice(0, index + 1).join('/')

          const breadcrumbLabel =
            segment === ''
              ? 'Strona Główna'
              : t(`page.app.${segment}.meta.title`)

          return (
            <li
              key={segment}
              className='font-quicksand inline-flex items-center capitalize'
            >
              <Link href={breadcrumbPath || '/'}>
                <Typography
                  variant='label'
                  size='md'
                  className={`${index === pathSegments.length - 1 ? 'text-[#000000]' : ''}`}
                >
                  {breadcrumbLabel}
                </Typography>
              </Link>
              {index < pathSegments.length - 1 && (
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
