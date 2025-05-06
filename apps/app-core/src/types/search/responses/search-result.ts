import { DiscountInfo, Price, Image, ProductVariant } from '../../common/responses'

export interface ProductSearchResult {
  id: string
  name: string
  slug: string
  brand?: string
  description?: string
  shortDescription?: string
  categories?: string[]
  price?: Price
  originalPrice?: Price
  discountInfo?: DiscountInfo
  variants?: ProductVariant[]
  image?: Image
}
