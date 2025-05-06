import { describe, expect, it } from 'vitest'
import { productMock } from '../../../test/fixtures/product'
import { getDependantSizes } from './get-dependant-sizes'

describe('utils/product/get-dependant-sizes', () => {
  it('should get sizes with correct properties depending on current colorKey', () => {
    const variant1Size = 'XXS'
    const variant1Attributes = [
      {
        name: 'size',
        value: variant1Size,
      },
      {
        name: 'color',
        value: {
          key: 'beige',
          label: 'Beige',
        },
      },
    ]

    const variant2Size = 'XS'
    const variant2Attributes = [
      {
        name: 'size',
        value: variant2Size,
      },
      {
        name: 'color',
        value: {
          key: 'beige',
          label: 'Beige',
        },
      },
    ]
    const sizes = getDependantSizes(
      {
        ...productMock,
        variants: [
          { ...productMock.variants[0], attributes: variant1Attributes },
          { ...productMock.variants[1], attributes: variant2Attributes },
        ],
      },
      'beige',
    )
    expect(sizes[0].text).toBe(variant1Size)
    expect(sizes[0].isSoldOut).toBe(!productMock.variants[0].stock)
    expect(sizes[1].text).toBe(variant2Size)
    expect(sizes[1].isSoldOut).toBe(!productMock.variants[1].stock)
  })
})
