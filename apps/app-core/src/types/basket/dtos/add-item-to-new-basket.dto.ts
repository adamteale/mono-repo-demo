export interface AddItemToNewBasketDto {
  guest?: boolean
  customerEmail?: string
  customerPassword?: string
  marketId?: string
  basketCurrency?: string
  productId: string
  variantId?: string | number
  quantity: number
}
