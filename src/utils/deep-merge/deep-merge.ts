import type { DeepPartial } from 'react-hook-form'

/**
 * Deeply merges two objects. The `partial` object will be merged into the `base` object.
 * If a property in `partial` is an object, it will be recursively merged with the corresponding property in `base`.
 * If a property in `partial` is not an object, it will overwrite the corresponding property in `base`.
 *
 * @template T - The type of the objects being merged.
 * @param {T} base - The base object that will be merged into.
 * @param {DeepPartial<T>} [partial={}] - The partial object that will be merged into the base object.
 * @returns {T} - The merged object.
 *
 * @example
 * const base = { a: 1, b: { c: 2 } };
 * const partial = { b: { c: 3 }, a: 4 };
 * const result = deepMerge(base, partial);
 * console.log(result); // { a: 4, b: { c: 3 } }
 */
export function deepMerge<T>(
  base: T,
  partial: DeepPartial<T> = {} as DeepPartial<T>,
): T {
  const result = { ...base }

  Object.keys(partial).forEach(key => {
    const typedKey = key as keyof T

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
  })

  return result
}
