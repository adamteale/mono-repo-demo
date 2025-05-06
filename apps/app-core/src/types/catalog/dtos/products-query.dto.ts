import { Order, Sort } from '../../common/dtos'

export interface ProductsQueryDto {
  limit?: number
  sort?: Sort
  order?: Order
  page?: number
  locale?: string
  currency?: string
  identifiers?: string
}
