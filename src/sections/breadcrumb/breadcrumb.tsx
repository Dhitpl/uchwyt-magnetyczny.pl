import { useSelectedLayoutSegments } from 'next/navigation'

import { useTranslations } from 'next-intl'

import type { Pathname } from '~/i18n/types'

import { getLabel } from './breadcrumb.utils'
import { BreadcrumbItem } from './components'

export function Breadcrumb() {
  const t = useTranslations()
  const selectedSegments = useSelectedLayoutSegments()

  return (
    <nav>
      <ol className='flex py-2.5 px-2.5 bg-gray-200 items-center text-gray-600 rounded-md gap-2.5'>
        <BreadcrumbItem
          pathname='/'
          label={t(`sections.breadcrumb./`)}
          isLastSegment={selectedSegments.length === 0}
        />

        {selectedSegments.map((_segment, index) => {
          const isLastSegment = index === selectedSegments.length - 1
          const nestedSegments = selectedSegments.slice(0, index + 1)

          const pathname = `/${nestedSegments.join('/')}` as Pathname

          const label = getLabel({
            index,
            pathname,
            segments: selectedSegments,
            t,
          })

          return (
            <BreadcrumbItem
              key={pathname}
              pathname={pathname}
              label={label}
              isLastSegment={isLastSegment}
            />
          )
        })}
      </ol>
    </nav>
  )
}
