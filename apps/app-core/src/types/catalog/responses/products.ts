import { Product } from '../../common/responses/product'

export interface Products {
  products: Product[]
  totalCount: number
  totalPages: number
  currentPage: number
  productsPerPage: number
}
