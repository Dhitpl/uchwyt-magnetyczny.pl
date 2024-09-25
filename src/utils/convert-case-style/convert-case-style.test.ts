import { describe, expect, it } from 'vitest'

import { convertCaseStyle, detectCaseStyle } from './convert-case-style'

describe('detectCaseStyle', () => {
  it('should detect `camelCase`', () => {
    expect(detectCaseStyle({ text: 'camelCaseText' })).toBe('camelCase')
  })

  it('should detect `PascalCase`', () => {
    expect(detectCaseStyle({ text: 'PascalCaseText' })).toBe('PascalCase')
  })

  it('should detect `kebab-case`', () => {
    expect(detectCaseStyle({ text: 'kebab-case-text' })).toBe('kebab-case')
  })

  it('should detect `snake_case`', () => {
    expect(detectCaseStyle({ text: 'snake_case_text' })).toBe('snake_case')
  })

  it('should detect `unknown`', () => {
    expect(detectCaseStyle({ text: 'Unknown-case_textA' })).toBe('unknown')
  })
})

describe('convertCaseStyle', () => {
  it('should convert camelCase to PascalCase', () => {
    expect(
      convertCaseStyle({ text: 'camelCaseText', style: 'PascalCase' }),
    ).toBe('CamelCaseText')
  })

  it('should convert camelCase to kebab-case', () => {
    expect(
      convertCaseStyle({ text: 'camelCaseText', style: 'kebab-case' }),
    ).toBe('camel-case-text')
  })

  it('should convert camelCase to snake_case', () => {
    expect(
      convertCaseStyle({ text: 'camelCaseText', style: 'snake_case' }),
    ).toBe('camel_case_text')
  })

  it('should convert PascalCase to camelCase', () => {
    expect(
      convertCaseStyle({ text: 'PascalCaseText', style: 'camelCase' }),
    ).toBe('pascalCaseText')
  })

  it('should convert PascalCase to kebab-case', () => {
    expect(
      convertCaseStyle({ text: 'PascalCaseText', style: 'kebab-case' }),
    ).toBe('pascal-case-text')
  })

  it('should convert PascalCase to snake_case', () => {
    expect(
      convertCaseStyle({ text: 'PascalCaseText', style: 'snake_case' }),
    ).toBe('pascal_case_text')
  })

  it('should convert kebab-case to camelCase', () => {
    expect(
      convertCaseStyle({ text: 'kebab-case-text', style: 'camelCase' }),
    ).toBe('kebabCaseText')
  })

  it('should convert kebab-case to PascalCase', () => {
    expect(
      convertCaseStyle({ text: 'kebab-case-text', style: 'PascalCase' }),
    ).toBe('KebabCaseText')
  })

  it('should convert kebab-case to snake_case', () => {
    expect(
      convertCaseStyle({ text: 'kebab-case-text', style: 'snake_case' }),
    ).toBe('kebab_case_text')
  })

  it('should convert snake_case to camelCase', () => {
    expect(
      convertCaseStyle({ text: 'snake_case_text', style: 'camelCase' }),
    ).toBe('snakeCaseText')
  })

  it('should convert snake_case to PascalCase', () => {
    expect(
      convertCaseStyle({ text: 'snake_case_text', style: 'PascalCase' }),
    ).toBe('SnakeCaseText')
  })

  it('should convert snake_case to kebab-case', () => {
    expect(
      convertCaseStyle({ text: 'snake_case_text', style: 'kebab-case' }),
    ).toBe('snake-case-text')
  })
})
