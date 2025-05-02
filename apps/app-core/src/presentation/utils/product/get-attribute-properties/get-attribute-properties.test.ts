import { describe, expect, it } from 'vitest'
import { getAttributeProperties } from './get-attribute-properties'
import { PRODUCT_VARIATIONS_KEY } from '../../../types'

describe('utils/product/get-attribute-properties', () => {
  describe('get color properties', () => {
    it('should return color properties correctly', () => {
      const colorKey = 'white'
      const attribute = [{ name: 'color', value: { key: 'white', label: `White` } }]
      const colorProperties = getAttributeProperties(attribute, PRODUCT_VARIATIONS_KEY.COLOR)
      expect(colorProperties.colorKey).toBe(colorKey)
    })

    it('should return undefined when attribute does not respect expected format', () => {
      const colorProperties = getAttributeProperties([{ name: 'attribute', value: [] }], PRODUCT_VARIATIONS_KEY.COLOR)
      expect(colorProperties.colorKey).toBeUndefined()
    })
  })

  describe('get size properties', () => {
    it('should return the size name correctly', () => {
      const attribute = [{ name: 'size', value: { label: 'XS' } }]
      const sizeProperties = getAttributeProperties(attribute, PRODUCT_VARIATIONS_KEY.SIZE)
      expect(sizeProperties.sizeName).toBe(attribute[0].value.label)
    })
    it('should return undefined when attribute does not respect expected format', () => {
      const sizeProperties = getAttributeProperties([{ name: 'attribute', value: [] }], PRODUCT_VARIATIONS_KEY.SIZE)
      expect(sizeProperties.sizeName).toBeUndefined()
    })
  })
})
