import { ProductSearchResult } from './search-result'
import { SuggestionResult } from './suggestion.result'
import { ProductFacet } from './facet'

export interface ProductSearchResponse {
  results: ProductSearchResult[]
  totalCount: number
  totalPages: number
  currentPage: number
  amountPerPage: number
  suggestions?: SuggestionResult[]
  facets?: ProductFacet[]
}
