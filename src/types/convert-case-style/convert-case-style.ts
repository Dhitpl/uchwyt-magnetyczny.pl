type CaseStyle = 'camelCase' | 'PascalCase' | 'snake_case' | 'kebab-case'

type ConvertToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<ConvertToCamelCase<U>>}`
  : S extends `${infer T}-${infer U}`
    ? `${Lowercase<T>}${Capitalize<ConvertToCamelCase<U>>}`
    : Uncapitalize<S>

type ConvertToPascalCase<S extends string> = Capitalize<ConvertToCamelCase<S>>

type ConvertToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Lowercase<T>}${ConvertToSnakeCase<U>}`
    : `${Lowercase<T>}_${ConvertToSnakeCase<U>}`
  : S

type ConvertToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Lowercase<T>}${ConvertToKebabCase<U>}`
    : `${Lowercase<T>}-${ConvertToKebabCase<U>}`
  : S

type SnakeToKebab<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}-${SnakeToKebab<U>}`
  : S

type KebabToSnake<S extends string> = S extends `${infer T}-${infer U}`
  ? `${T}_${KebabToSnake<U>}`
  : S

export type ConvertCaseStyle<
  S extends string,
  To extends CaseStyle,
> = To extends 'camelCase'
  ? ConvertToCamelCase<S>
  : To extends 'PascalCase'
    ? ConvertToPascalCase<S>
    : To extends 'snake_case'
      ? S extends `${string}-${string}`
        ? KebabToSnake<S>
        : ConvertToSnakeCase<S>
      : To extends 'kebab-case'
        ? S extends `${string}_${string}`
          ? SnakeToKebab<S>
          : ConvertToKebabCase<S>
        : S
