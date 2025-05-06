import { describe, expect, it } from 'vitest'
import { getSuggestionUrl } from '..'

describe('get-suggestion-url', () => {
  describe('when the slug prop is provided', () => {
    it('should generate the catalog url with a slug', () => {
      const slug = 'suggestion-slug'
      const url = getSuggestionUrl({ slug, value: 'value' })

      expect(url).toBe(`/catalog/${slug}`)
    })
  })

  describe('when slug does not exist', () => {
    it('should use the value as a query param', () => {
      const suggestionValue = 'Suggestion Value'
      const url = getSuggestionUrl({ value: suggestionValue })

      expect(url).toBe(`/catalog/?query=${encodeURI(suggestionValue)}`)
    })
  })
})
