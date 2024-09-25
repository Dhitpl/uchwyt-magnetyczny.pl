/* eslint-disable import/no-extraneous-dependencies */
import { describe, expectTypeOf, it } from 'vitest'

import { HexColor } from './color'

describe('HexColor', () => {
  it('should accept valid 3-digit hex colors', () => {
    expectTypeOf<HexColor<'#abc'>>().toBeString()
    expectTypeOf<HexColor<'#123'>>().toBeString()
  })

  it('should accept valid 6-digit hex colors', () => {
    expectTypeOf<HexColor<'#abcdef'>>().toBeString()
    expectTypeOf<HexColor<'#123456'>>().toBeString()
  })

  it('should reject invalid hex colors', () => {
    expectTypeOf<HexColor<'#abcd'>>().toBeNever()
    expectTypeOf<HexColor<'#12345'>>().toBeNever()
    expectTypeOf<HexColor<'#1234567'>>().toBeNever()
    expectTypeOf<HexColor<'#xyz'>>().toBeNever()
  })

  it('should accept valid uppercase hex colors', () => {
    expectTypeOf<HexColor<'#ABC'>>().toBeString()
    expectTypeOf<HexColor<'#123ABC'>>().toBeString()
  })

  it('should reject invalid uppercase hex colors', () => {
    expectTypeOf<HexColor<'#ABCD'>>().toBeNever()
    expectTypeOf<HexColor<'#1234567A'>>().toBeNever()
    expectTypeOf<HexColor<'#XYZ'>>().toBeNever()
  })
})
