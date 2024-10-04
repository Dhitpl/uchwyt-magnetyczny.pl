/* eslint-disable import/no-extraneous-dependencies */
import { describe, expectTypeOf, it } from 'vitest'

import { ConvertCaseStyle } from '~/types/convert-case-style'

describe('ConvertCaseStyle', () => {
  it('should convert camelCase to PascalCase', () => {
    expectTypeOf<
      ConvertCaseStyle<'camelCaseText', 'PascalCase'>
    >().toEqualTypeOf<'CamelCaseText'>()
  })

  it('should convert camelCase to snake_case', () => {
    expectTypeOf<
      ConvertCaseStyle<'camelCaseText', 'snake_case'>
    >().toEqualTypeOf<'camel_case_text'>()
  })

  it('should convert camelCase to kebab-case', () => {
    expectTypeOf<
      ConvertCaseStyle<'camelCaseText', 'kebab-case'>
    >().toEqualTypeOf<'camel-case-text'>()
  })

  it('should convert PascalCase to camelCase', () => {
    expectTypeOf<
      ConvertCaseStyle<'PascalCaseText', 'camelCase'>
    >().toEqualTypeOf<'pascalCaseText'>()
  })

  it('should convert PascalCase to snake_case', () => {
    expectTypeOf<
      ConvertCaseStyle<'PascalCaseText', 'snake_case'>
    >().toEqualTypeOf<'pascal_case_text'>()
  })

  it('should convert PascalCase to kebab-case', () => {
    expectTypeOf<
      ConvertCaseStyle<'PascalCaseText', 'kebab-case'>
    >().toEqualTypeOf<'pascal-case-text'>()
  })

  it('should convert snake_case to camelCase', () => {
    expectTypeOf<
      ConvertCaseStyle<'snake_case_text', 'camelCase'>
    >().toEqualTypeOf<'snakeCaseText'>()
  })

  it('should convert snake_case to PascalCase', () => {
    expectTypeOf<
      ConvertCaseStyle<'snake_case_text', 'PascalCase'>
    >().toEqualTypeOf<'SnakeCaseText'>()
  })

  it('should convert snake_case to kebab-case', () => {
    expectTypeOf<
      ConvertCaseStyle<'snake_case_text', 'kebab-case'>
    >().toEqualTypeOf<'snake-case-text'>()
  })

  it('should convert kebab-case to camelCase', () => {
    expectTypeOf<
      ConvertCaseStyle<'kebab-case-text', 'camelCase'>
    >().toEqualTypeOf<'kebabCaseText'>()
  })

  it('should convert kebab-case to PascalCase', () => {
    expectTypeOf<
      ConvertCaseStyle<'kebab-case-text', 'PascalCase'>
    >().toEqualTypeOf<'KebabCaseText'>()
  })

  it('should convert kebab-case to snake_case', () => {
    expectTypeOf<
      ConvertCaseStyle<'kebab-case-text', 'snake_case'>
    >().toEqualTypeOf<'kebab_case_text'>()
  })
})
