export interface AddItemToExistingBasketDto {
  productId: string
  quantity: number
  variantId?: string | number
}
