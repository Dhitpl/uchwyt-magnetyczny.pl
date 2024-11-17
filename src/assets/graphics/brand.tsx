import { useTranslations } from 'next-intl'
import type { DeepPartial } from 'react-hook-form'

import type { Color, Size } from '~/types'

import { useBreakpoint } from '~/hooks'

import { cn, deepMerge, getColor, getSizeByBreakpoint } from '~/utils'

type BrandProps<T extends string = string> = {
  size?: Size
  className?: HTMLElement['className']
  color?: DeepPartial<{
    top: Color<T>
    bottom: Color<T>
  }>
}

const defaultColor = {
  top: 'gray-300',
  bottom: 'red-500',
}

export function Brand<T extends string>({
  size = 50,
  className,
  color,
}: BrandProps<T>) {
  const t = useTranslations()

  const breakpoint = useBreakpoint()

  const currentSize = getSizeByBreakpoint({
    size,
    breakpoint,
  })

  const currentColor = deepMerge(defaultColor, color as BrandProps['color'])

  const fontSize = (currentSize || 0) / 2

  return (
    <div
      className={cn('flex flex-col', className)}
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: `${fontSize}px`,
      }}
    >
      <div
        className='w-full'
        style={{
          color: getColor(currentColor.top as Color),
        }}
      >
        {t('sections.navbar.logo.handles')}
      </div>
      <div
        className='w-full'
        style={{
          color: getColor(currentColor.bottom as Color),
        }}
      >
        {t('sections.navbar.logo.magnetic')}
      </div>
    </div>
  )
}
