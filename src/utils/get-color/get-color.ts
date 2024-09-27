import type { Color } from '~/types'

import { colors } from '~/styles'

/**
 * Retrieves the color value from the color name and shade or a hex color code.
 *
 * @param color - The color name and shade in the format "name-shade" or a hex color code.
 * @returns - The corresponding color value or `undefined` if the color is invalid.
 *
 * @example
 * // Get color value from name and shade
 * const colorValue = getColor("slate-600");
 * console.log(colorValue); // Outputs the color value for slate-600
 *
 * @example
 * // Get color value from hex code
 * const colorValue = getColor("#FF5733");
 * console.log(colorValue); // Outputs: "#FF5733"
 */
export const getColor = <T extends string>(color: Color<T>) => {
  if (color.startsWith('#') && color.length !== 4 && color.length !== 7) {
    console.error(`Invalid color: ${color}`)

    return undefined
  }

  if (color.startsWith('#')) {
    return color.toLowerCase()
  }

  const attributes = color.split('-')

  const name = attributes[0] as keyof typeof colors
  const shade = parseInt(
    attributes[1],
    10,
  ) as keyof (typeof colors)[typeof name]

  if (!colors[name] || !colors[name][shade]) {
    console.error(`Invalid color: ${color}`)

    return undefined
  }

  return colors[name][shade]
}
