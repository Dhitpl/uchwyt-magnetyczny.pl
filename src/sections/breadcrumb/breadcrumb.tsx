import { useSelectedLayoutSegments } from 'next/navigation'

import { useTranslations } from 'next-intl'

import type { Href } from '~/i18n/types'

import { getLabel } from './breadcrumb.utils'
import { BreadcrumbItem } from './components'

export function Breadcrumb() {
  const t = useTranslations()
  const selectedSegments = useSelectedLayoutSegments()

  return (
    <nav className='p-5'>
      <ol className='flex py-2.5 px-2.5 bg-gray-200 items-center text-gray-600 rounded-md gap-2.5'>
        <BreadcrumbItem
          href='/'
          label={t(`sections.breadcrumb./`)}
          isLastSegment={selectedSegments.length === 0}
        />

        {selectedSegments.map((_segment, index) => {
          const isLastSegment = index === selectedSegments.length - 1
          const nestedSegments = selectedSegments.slice(0, index + 1)

          const href = `/${nestedSegments.join('/')}` as Href
          const pathname = typeof href === 'string' ? href : href.pathname

          const label = getLabel({
            index,
            pathname,
            segments: selectedSegments,
            t,
          })

          return (
            <BreadcrumbItem
              key={pathname}
              href={href}
              label={label}
              isLastSegment={isLastSegment}
            />
          )
        })}
      </ol>
    </nav>
  )
}
