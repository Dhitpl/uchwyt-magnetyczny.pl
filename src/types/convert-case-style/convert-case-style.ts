type CaseStyle = 'camelCase' | 'PascalCase' | 'snake_case' | 'kebab-case'

// Convert to camelCase
type ConvertToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${Lowercase<T>}${Capitalize<ConvertToCamelCase<U>>}`
  : S extends `${infer T}-${infer U}`
    ? `${Lowercase<T>}${Capitalize<ConvertToCamelCase<U>>}`
    : Uncapitalize<S> // To fix PascalCase to camelCase

// Convert to PascalCase
type ConvertToPascalCase<S extends string> = Capitalize<ConvertToCamelCase<S>>

// Convert to snake_case
// Convert a string to snake_case
// Convert a string to snake_case (from camelCase or PascalCase)
type ConvertToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Lowercase<T>}${ConvertToSnakeCase<U>}`
    : `${Lowercase<T>}_${ConvertToSnakeCase<U>}`
  : S

// Convert a string to kebab-case (from camelCase or PascalCase)
type ConvertToKebabCase<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Lowercase<T>}${ConvertToKebabCase<U>}`
    : `${Lowercase<T>}-${ConvertToKebabCase<U>}`
  : S

// Directly convert snake_case to kebab-case by replacing '_' with '-'
type SnakeToKebab<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}-${SnakeToKebab<U>}`
  : S

// Directly convert kebab-case to snake_case by replacing '-' with '_'
type KebabToSnake<S extends string> = S extends `${infer T}-${infer U}`
  ? `${T}_${KebabToSnake<U>}`
  : S

// General case style conversion
export type ConvertCaseStyle<
  S extends string,
  To extends CaseStyle,
> = To extends 'camelCase'
  ? ConvertToCamelCase<S>
  : To extends 'PascalCase'
    ? ConvertToPascalCase<S>
    : To extends 'snake_case'
      ? S extends `${string}-${string}`
        ? KebabToSnake<S> // Convert kebab-case to snake_case
        : ConvertToSnakeCase<S> // Convert camelCase or PascalCase to snake_case
      : To extends 'kebab-case'
        ? S extends `${string}_${string}`
          ? SnakeToKebab<S> // Convert snake_case to kebab-case
          : ConvertToKebabCase<S> // Convert camelCase or PascalCase to kebab-case
        : S
