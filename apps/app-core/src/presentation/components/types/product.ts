import { ProductVariant } from './product-variant'

export interface HierarchyNode {
  id: string
  name: string
  slug: string
}

export interface Rating {
  average: number
  count?: number
}

export type Product = {
  categories?: string[]
  description?: string
  hierarchies?: HierarchyNode[][]
  id: string
  name: string
  shortDescription?: string
  slug: string
  rating?: Rating
  variants: ProductVariant[]
  brand?: string
}
