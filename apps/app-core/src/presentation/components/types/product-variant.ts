import { Price, Image, VariantAttribute } from '../..'

export const PRODUCT_VARIATIONS_KEY = {
  SIZE: 'size',
  COLOR: 'color',
  MATERIALS: 'materials',
  CARE: 'care',
} as const
export type ProductVariantKey = (typeof PRODUCT_VARIATIONS_KEY)[keyof typeof PRODUCT_VARIATIONS_KEY]

export interface DiscountInfo {
  percentage: number
  validFrom?: string
  validUntil?: string
}

export interface ProductVariant {
  id: string
  sku?: string
  attributes: VariantAttribute[]
  stock: number
  images: Image[]
  originalPrice?: Price
  price?: Price
  discountInfo?: DiscountInfo
}
