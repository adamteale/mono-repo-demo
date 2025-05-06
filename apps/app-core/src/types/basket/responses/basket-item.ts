import { Image, Price, ProductVariant } from '../../common/responses'

export interface BasketItem {
  basketItemId: string
  brand?: string
  name: string
  sku: string
  slug: string
  productId: string
  price: Price
  originalPrice?: Price
  discountPercentage?: number
  totalPrice: Price
  totalOriginalPrice?: Price
  image?: Image
  shortDescription: string
  quantity: number
  attributes?: ProductVariant['attributes']
}
