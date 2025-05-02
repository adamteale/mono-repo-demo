import { describe, expect, it } from 'vitest'
import { productMock } from '../../../test/fixtures/product'
import { getVariantSizes } from './get-variant-sizes'
import { PRODUCT_VARIATIONS_KEY } from '../../../types'

describe('utils/product/get-variant-sizes', () => {
  it('should return mapped size object', () => {
    const sizes = getVariantSizes(productMock)
    expect(sizes.length).toBe(productMock.variants.length)
    expect(sizes[0].text).toBe(
      productMock.variants[0].attributes.find((att) => att.name === PRODUCT_VARIATIONS_KEY.SIZE)?.value,
    )
    expect(sizes[1].text).toBe(
      productMock.variants[1].attributes.find((att) => att.name === PRODUCT_VARIATIONS_KEY.SIZE)?.value,
    )
  })
})
