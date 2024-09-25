'use client'

import type { Color } from '~/types'

import { useBreakpoint } from '~/hooks'

import { cn, getColor } from '~/utils'

import { defaultColor } from './icon.const'
import { Custom, Lucide, Size } from './icon.types'
import { getIconComponent, getSizeByBreakpoint } from './icon.utils'

export type IconProps<T extends string = string> = {
  size?: Size
  color?: Color<T>
  className?: HTMLElement['className']
} & (Lucide | Custom)

/**
 * Icon component that renders an icon from the icons set.
 *
 * @template T - A string type for validating color
 * @param props - The props for the Icon component.
 * @param [props.size=24] - The size of the icon.
 * @param [props.className] - Additional class names to apply to the component.
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
 *
 * @example
 * // Render a Lucide icon with custom size for mobile and tablet
 * <Icon variant="lucide" name="home" size={{ xs: 24, md: 32 }} />
 *
 * @example
 * // Render a Lucide icon with additional class names
 * <Icon variant="lucide" name="home" className="bg-slate-900" />
 */
export function Icon<T extends string = string>({
  size = 24,
  color = defaultColor,
  className,
  ...props
}: IconProps<T>) {
  const hexColor = getColor(color) as Color
  const breakpoint = useBreakpoint()

  const IconComponent = getIconComponent(props)

  const currentSize = getSizeByBreakpoint({
    breakpoint,
    size,
  })

  return (
    <div
      className={cn(`flex items-center justify-center`, className)}
      style={{
        width: `${currentSize}px`,
        height: `${currentSize}px`,
      }}
    >
      <IconComponent size={currentSize} color={hexColor} />
    </div>
  )
}
