import type { Color } from '~/types/color'

import { colors } from '~/styles/colors'

/**
 * Retrieves the color value from the color name and shade.
 *
 * @param {string} color - The color name and shade in the format "name-shade" or a hex color code.
 * @returns {string} The corresponding color value.
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
  if (color.startsWith('#')) {
    return color
  }

  const attributes = color.split('-')

  const name = attributes[0] as keyof typeof colors
  const shade = parseInt(
    attributes[1],
    10,
  ) as keyof (typeof colors)[typeof name]

  return colors[name][shade]
}
