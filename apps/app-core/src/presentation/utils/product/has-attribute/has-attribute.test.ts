import { describe, expect, it } from 'vitest'
import { productMock } from '../../../test/fixtures/product'
import { hasAttribute } from './has-attribute'

describe('utils/product/has-attribute', () => {
  it('should return true when every product variant has a color attribute', () => {
    const hasColorAttribute = hasAttribute(productMock, 'color')
    expect(hasColorAttribute).toBeTruthy()
  })

  it('should return false when not every product variant has a color attribute', () => {
    const hasColorAttribute = hasAttribute(
      {
        ...productMock,
        variants: [
          productMock.variants[0],
          {
            ...productMock.variants[1],
            attributes: [],
          },
        ],
      },
      'color',
    )
    expect(hasColorAttribute).toBeFalsy()
  })

  it('should return true when every product variant has a size attribute', () => {
    const hasSizeAttribute = hasAttribute(productMock, 'size')
    expect(hasSizeAttribute).toBeTruthy()
  })

  it('should return false when not every product variant has a size attribute', () => {
    const hasSizeAttribute = hasAttribute(
      {
        ...productMock,
        variants: [
          productMock.variants[0],
          {
            ...productMock.variants[1],
            attributes: [],
          },
        ],
      },
      'color',
    )
    expect(hasSizeAttribute).toBeFalsy()
  })
})
