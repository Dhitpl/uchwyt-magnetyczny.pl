import { describe, expect, it } from 'vitest'

import { Breakpoint } from '~/styles'

import { getSizeByBreakpoint } from './get-size-by-breakpoint'

describe('getSizeByBreakpoint', () => {
  it('should return the correct size for a given breakpoint', () => {
    const size: Record<Breakpoint, number | undefined> = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      '2xl': 6,
      '3xl': 7,
    }

    expect(getSizeByBreakpoint({ size, breakpoint: 'xs' })).toBe(1)
    expect(getSizeByBreakpoint({ size, breakpoint: 'sm' })).toBe(2)
    expect(getSizeByBreakpoint({ size, breakpoint: 'md' })).toBe(3)
    expect(getSizeByBreakpoint({ size, breakpoint: 'lg' })).toBe(4)
    expect(getSizeByBreakpoint({ size, breakpoint: 'xl' })).toBe(5)
    expect(getSizeByBreakpoint({ size, breakpoint: '2xl' })).toBe(6)
    expect(getSizeByBreakpoint({ size, breakpoint: '3xl' })).toBe(7)
  })

  it('should return the correct size for a given breakpoint with a closest size fallback', () => {
    const size: Record<Breakpoint, number | undefined> = {
      xs: 1,
      sm: undefined,
      md: undefined,
      lg: 2,
      xl: undefined,
      '2xl': undefined,
      '3xl': undefined,
    }

    expect(getSizeByBreakpoint({ size, breakpoint: 'xs' })).toBe(1)
    expect(getSizeByBreakpoint({ size, breakpoint: 'sm' })).toBe(1)
    expect(getSizeByBreakpoint({ size, breakpoint: 'md' })).toBe(1)
    expect(getSizeByBreakpoint({ size, breakpoint: 'lg' })).toBe(2)
    expect(getSizeByBreakpoint({ size, breakpoint: 'xl' })).toBe(2)
    expect(getSizeByBreakpoint({ size, breakpoint: '2xl' })).toBe(2)
    expect(getSizeByBreakpoint({ size, breakpoint: '3xl' })).toBe(2)
  })

  it('should return undefined if the size object is empty', () => {
    const size: Record<Breakpoint, number | undefined> = {
      xs: undefined,
      sm: undefined,
      md: undefined,
      lg: 2,
      xl: 2,
      '2xl': 2,
      '3xl': 2,
    }

    expect(getSizeByBreakpoint({ size: {}, breakpoint: 'xs' })).toBe(undefined)
    expect(getSizeByBreakpoint({ size, breakpoint: 'sm' })).toBe(undefined)
    expect(getSizeByBreakpoint({ size, breakpoint: 'md' })).toBe(undefined)
    expect(getSizeByBreakpoint({ size, breakpoint: 'lg' })).toBe(2)
    expect(getSizeByBreakpoint({ size, breakpoint: 'xl' })).toBe(2)
    expect(getSizeByBreakpoint({ size, breakpoint: '2xl' })).toBe(2)
    expect(getSizeByBreakpoint({ size, breakpoint: '3xl' })).toBe(2)
  })
})
