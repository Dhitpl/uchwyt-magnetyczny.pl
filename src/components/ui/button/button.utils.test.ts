import { describe, expect, it } from 'vitest'

import { getIconColor } from './button.utils'

describe(`getIconColor`, () => {
  it(`should return the correct color for a matching class name`, () => {
    expect(getIconColor('text-red-500')).toBe('red-500')
    expect(getIconColor(' text-red-500')).toBe('red-500')
    expect(getIconColor('text-red-500 ')).toBe('red-500')
    expect(getIconColor(' text-red-500 ')).toBe('red-500')
    expect(getIconColor('text-blue-300 text-blue-400')).toBe('blue-300')
    expect(getIconColor('text-green-700')).toBe('green-700')
    expect(getIconColor('text-yellow-100')).toBe('yellow-100')
  })

  it(`should return 'undefined' for a non-matching class name`, () => {
    expect(getIconColor('text-purple-5000')).toBeUndefined()
    expect(getIconColor('bg-red-500')).toBeUndefined()
    expect(getIconColor('text-red')).toBeUndefined()
    expect(getIconColor('text-red-5000')).toBeUndefined()
  })

  it(`should return 'undefined' for an empty class name`, () => {
    expect(getIconColor('')).toBeUndefined()
  })

  it(`should return 'undefined' for a class name without color`, () => {
    expect(getIconColor('text-')).toBeUndefined()
  })

  it(`should return 'undefined' for a class name with invalid format`, () => {
    expect(getIconColor('text-red-')).toBeUndefined()
    expect(getIconColor('text--500')).toBeUndefined()
    expect(getIconColor('text-red-blue-500')).toBeUndefined()
  })
})
