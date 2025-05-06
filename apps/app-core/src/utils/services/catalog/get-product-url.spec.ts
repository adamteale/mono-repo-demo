import { describe, expect, it } from 'vitest'
import { getProductUrl } from '..'
import { environment } from '../../../config/environment'

describe('get-product-url', () => {
  describe('when the slug prop is provided', () => {
    it('should generate the correct product URL with a slug', () => {
      environment.getProductBy = 'slug'
      const slug = 'mochiato-product'
      const url = getProductUrl({ slug })

      expect(url).toBe(`/products/${slug}`)
    })

    it('should generate the correct product URL with an id', () => {
      environment.getProductBy = 'id'
      const id = '67890'
      const url = getProductUrl({ id })

      expect(url).toBe(`/products/${id}`)
    })
  })
})
