import { describe, expect, it } from 'vitest'

import { deepMerge } from './deep-merge'

describe('deepMerge', () => {
  it('should deeply merge two objects', () => {
    const base = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
          f: 4,
        },
      },
      g: 5,
    }

    const partial = {
      b: {
        c: 20,
      },
    }

    const expected = {
      a: 1,
      b: {
        c: 20,
        d: {
          e: 3,
          f: 4,
        },
      },
      g: 5,
    }

    const result = deepMerge(base, partial)
    expect(result).toEqual(expected)
  })

  it('should overwrite top-level properties', () => {
    const base = {
      a: 1,
      b: {
        c: 2,
      },
    }

    const partial = {
      a: 100,
    }

    const expected = {
      a: 100,
      b: {
        c: 2,
      },
    }

    const result = deepMerge(base, partial)
    expect(result).toEqual(expected)
  })

  it('should handle nested undefined properties', () => {
    const base = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 3,
        },
      },
    }

    const partial = {
      b: {
        d: undefined,
      },
    }

    const expected = {
      a: 1,
      b: {
        c: 2,
        d: undefined,
      },
    }

    const result = deepMerge(base, partial)
    expect(result).toEqual(expected)
  })

  it('should work with empty partial object', () => {
    const base = {
      a: 1,
      b: {
        c: 2,
      },
    }

    const partial = {}

    const expected = {
      a: 1,
      b: {
        c: 2,
      },
    }

    const result = deepMerge(base, partial)
    expect(result).toEqual(expected)
  })

  it('should handle arrays as values without merging them', () => {
    const base = {
      a: [1, 2, 3],
      b: {
        c: [4, 5, 6],
      },
    }

    const partial = {
      b: {
        c: [7, 8, 9],
      },
    }

    const expected = {
      a: [1, 2, 3],
      b: {
        c: [7, 8, 9],
      },
    }

    const result = deepMerge(base, partial)
    expect(result).toEqual(expected)
  })

  it('should add new properties from the partial object', () => {
    const base = {
      a: 1,
      b: {
        c: 2,
      },
    }

    const partial = {
      b: {
        d: 3,
      },
      e: 4,
    }

    const expected = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
      e: 4,
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = deepMerge(base, partial)
    expect(result).toEqual(expected)
  })

  it('should return the base object if partial is undefined', () => {
    const base = {
      a: 1,
      b: {
        c: 2,
      },
    }

    const partial = undefined

    const expected = {
      a: 1,
      b: {
        c: 2,
      },
    }

    const result = deepMerge(base, partial)
    expect(result).toEqual(expected)
  })
})
