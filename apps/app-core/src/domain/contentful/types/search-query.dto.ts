import { Sort, Order } from '.'

export interface SearchQueryDto {
  page?: number
  limit?: number
  sort?: Sort
  order?: Order
  text?: string
  facet?: string | string[]
  filter?: string | string[]
}
