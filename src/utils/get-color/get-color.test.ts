import { describe, expect, it, vi } from 'vitest'

import { colors } from '~/styles'

import { getColor } from './get-color'

describe('getColor', () => {
  const consoleMock = vi
    .spyOn(console, 'error')
    .mockImplementation(() => undefined)

  it(`should return the '${colors.red[500]}' hex color for 'red-500' token`, () => {
    expect(getColor('red-500')).toBe(colors.red[500])
  })

  it(`should return the 'undefined' for 'red-50000' token`, () => {
    consoleMock.mockClear()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(getColor('red-50000')).toBeUndefined()
    expect(consoleMock).toHaveBeenCalledOnce()
    expect(consoleMock).toHaveBeenLastCalledWith(`Invalid color: red-50000`)
  })

  it(`should return the '#fff' hex color for '#FFf'`, () => {
    expect(getColor('#FFf')).toBe('#fff')
  })

  it(`should return the '#ffffff' hex color for '#FFffFF'`, () => {
    expect(getColor('#FFffFF')).toBe('#ffffff')
  })

  it(`should return the 'undefined' for '#FFfffFF'`, () => {
    consoleMock.mockClear()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(getColor('#FFfffFF')).toBeUndefined()
    expect(consoleMock).toHaveBeenCalledOnce()
    expect(consoleMock).toHaveBeenLastCalledWith(`Invalid color: #FFfffFF`)
  })

  it(`should return the 'undefined' for '#FFffF'`, () => {
    consoleMock.mockClear()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(getColor('#FFffF')).toBeUndefined()
    expect(consoleMock).toHaveBeenCalledOnce()
    expect(consoleMock).toHaveBeenLastCalledWith(`Invalid color: #FFffF`)
  })
})
