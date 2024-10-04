import type { DeepPartial } from 'react-hook-form'

export function deepMerge<T>(
  base: T,
  partial: DeepPartial<T> = {} as DeepPartial<T>,
): T {
  const result = { ...base }

  Object.keys(partial).forEach(key => {
    const typedKey = key as keyof T

    if (key in partial) {
      if (
        typeof partial[typedKey] === 'object' &&
        partial[typedKey] !== null &&
        !Array.isArray(partial[typedKey])
      ) {
        result[typedKey] = deepMerge(
          result[typedKey],
          partial[typedKey] as DeepPartial<T[keyof T]>,
        )
      } else {
        result[typedKey] = partial[typedKey] as T[keyof T]
      }
    }
  })

  return result
}
