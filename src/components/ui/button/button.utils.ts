import type { Color } from '~/types'

import { colors } from '~/styles'

/**
 * Extracts the color from a given class name string.
 *
 * @param {string} classNames - A string containing class names.
 * @returns {Color | undefined} - The extracted color in the format `palette-shade` if found, otherwise `undefined`.
 */
export const getIconColor = (classNames: string): Color | undefined => {
  const regex = new RegExp(`text-(${Object.keys(colors).join('|')})-(\\d{1,4})`)

  const classNamesArray = classNames.split(' ')

  const matchedClass = classNamesArray.find(className => {
    const match = className.match(regex)

    if (match) {
      const palette = match[1] as keyof typeof colors
      const shade = Number(match[2])

      return palette in colors && shade in colors[palette]
    }

    return false
  })

  if (matchedClass) {
    const match = matchedClass.match(regex)
    if (match) {
      return `${match[1]}-${match[2]}` as Color
    }
  }

  return undefined
}
