import { renderHook, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useProductVariant } from './use-product-variant'
import { productMock } from '../../../../test/fixtures/product'

describe('use-product-variant', () => {
  it('should return first variant if there are no color variants', () => {
    const [variant1, variant2] = productMock.variants
    const modifiedVariant1 = { ...variant1, attributes: [] }
    const modifiedVariant2 = { ...variant2, attributes: [] }
    const product = {
      ...productMock,
      variants: [modifiedVariant1, modifiedVariant2],
    }
    const { result } = renderHook(() => useProductVariant(product))
    expect(result.current.selectedVariant).toStrictEqual(modifiedVariant1)
  })

  it('should return matching color variant if there are no size variants', () => {
    const [variant1, variant2] = productMock.variants
    const modifiedVariant1 = {
      ...variant1,
      attributes: [
        {
          name: 'color',
          value: {
            key: 'red',
            label: 'Red',
          },
        },
      ],
    }
    const modifiedVariant2 = {
      ...variant2,
      attributes: [
        {
          name: 'color',
          value: {
            key: 'blue',
            label: 'Blue',
          },
        },
      ],
    }
    const product = {
      ...productMock,
      variants: [modifiedVariant1, modifiedVariant2],
    }
    const { result } = renderHook(() => useProductVariant(product))
    act(() => result.current.colors?.onClick?.(1))

    expect(result.current.selectedVariant).toStrictEqual(modifiedVariant2)
  })

  it('should return matching size variant if there are no color variants', () => {
    const [variant1, variant2] = productMock.variants
    const modifiedVariant1 = {
      ...variant1,
      attributes: [
        {
          name: 'size',
          value: {
            key: 'seven',
            label: '7',
          },
        },
      ],
    }
    const modifiedVariant2 = {
      ...variant2,
      attributes: [
        {
          name: 'size',
          value: {
            key: 'nine',
            label: '9',
          },
        },
      ],
    }
    const product = {
      ...productMock,
      variants: [modifiedVariant1, modifiedVariant2],
    }
    const { result } = renderHook(() => useProductVariant(product))
    act(() => result.current.sizes?.onClick?.(1))

    expect(result.current.selectedVariant).toStrictEqual(modifiedVariant2)
  })

  it('should return matching variant when both color and size variants are present', () => {
    const { result } = renderHook(() => useProductVariant(productMock))
    act(() => result.current.sizes?.onClick?.(1))

    expect(result.current.selectedVariant).toStrictEqual(productMock.variants[1])
  })

  it('should set all colors isSoldOut property to false when both color and size variants are present', () => {
    const { result } = renderHook(() => useProductVariant(productMock))

    expect(result.current.colors?.options.every((color) => !color.isSoldOut))
  })
})
