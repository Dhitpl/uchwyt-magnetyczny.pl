import { Icon, Typography } from '~/components'

import { Link } from '~/i18n/routing'
import type { Href } from '~/i18n/types'

import { cn } from '~/utils'

type BreadcrumbItemProps = {
  href: Href
  isLastSegment: boolean
  label: string
}

export function BreadcrumbItem({
  href,
  isLastSegment,
  label,
}: BreadcrumbItemProps) {
  return (
    <li className='font-quicksand inline-flex items-center capitalize gap-2.5'>
      <Link href={href}>
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
}
