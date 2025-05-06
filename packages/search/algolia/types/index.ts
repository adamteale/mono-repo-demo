export interface AlgoliaHit {
  objectID: string
  name: string
  description: string
  price: number
  brand: string
  slug: string
  categories: string[]
  variants: Variant[]
  productId: string
}

interface Variant {
  stock: number
  variantId: string
  sku: string
  image: {
    src: string
    alt?: string
  }
  price?: {
    formatted: string
    amount: number
    currency: string
  }
  color?: {
    key: string
    label: string
  }
  size?: number
  brand: string
}
