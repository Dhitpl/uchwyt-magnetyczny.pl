type CamelToKebab<
  T extends string,
  FirstRun extends boolean = true,
> = T extends `${infer First}${infer Rest}`
  ? First extends Lowercase<First>
    ? `${First}${CamelToKebab<Rest, false>}`
    : FirstRun extends true
      ? `${Lowercase<First>}${CamelToKebab<Rest, false>}`
      : `-${Lowercase<First>}${CamelToKebab<Rest, false>}`
  : T

type CapitalizeFirst<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : T

type ReplaceChar<
  T extends string,
  From extends string,
  To extends string,
> = T extends `${infer Start}${From}${infer Rest}`
  ? `${Start}${To}${ReplaceChar<Rest, From, To>}`
  : T

export type ConvertCaseStyle<
  T extends string,
  Style extends 'camelCase' | 'PascalCase' | 'kebab-case' | 'snake_case',
> = Style extends 'kebab-case'
  ? CamelToKebab<T>
  : Style extends 'snake_case'
    ? CamelToKebab<T> extends infer KebabResult extends string
      ? ReplaceChar<KebabResult, '-', '_'>
      : never
    : Style extends 'PascalCase'
      ? CapitalizeFirst<Uncapitalize<T>>
      : T
