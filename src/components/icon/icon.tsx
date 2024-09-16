import { Suspense } from 'react'

import type { Color } from '~/types'

import { getColor } from '~/utils'

import { defaultColor } from './icon.const'
import { Custom, Lucide } from './icon.types'
import { getIconComponent } from './icon.utils'

export type IconProps<T extends string = string> = {
  size?: number
  color?: Color<T>
} & (Lucide | Custom)

/**
 * Icon component that renders an icon from the icons set.
 *
 * @template T - A string type for validating color
 * @param props - The props for the Icon component.
 * @param [props.size=24] - The size of the icon.
 * @param [props.color=defaultColor] - The color of the icon.
 * @param props.variant - The variant of the icon.
 * @param props.name - The name of the icon to render.
 * @returns The rendered icon component.
 *
 * @example
 * // Render a Lucide icon with default size and color
 * <Icon variant="lucide" name="home" />
 *
 * @example
 * // Render a custom icon with default size and color
 * <Icon variant="custom" name="apple" />
 *
 * @example
 * // Render a Lucide icon with custom token color
 * <Icon variant="lucide" name="home" color="slate-600" />
 *
 * @example
 * // Render a custom icon with custom hex color
 * <Icon variant="custom" name="apple" color="#ff00ff" />
 *
 * @example
 * // Render a Lucide icon with custom size and token color
 * <Icon variant="lucide" name="home" size={32} color="slate-600" />
 */
export function Icon<T extends string = string>({
  size = 24,
  color = defaultColor,
  ...props
}: IconProps<T>) {
  const hexColor = getColor(color)

  const IconComponent = getIconComponent(props)

  return (
    <div
      className={`w-[${size}px] h-[${size}px] flex items-center justify-center`}
    >
      <Suspense>
        <IconComponent size={size} color={hexColor} />
      </Suspense>
    </div>
  )
}
