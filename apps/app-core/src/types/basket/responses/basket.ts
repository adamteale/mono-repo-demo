import { BasketItem } from './basket-item'
import { Address } from './address'
import { Shipment } from './shipment'
import { Price } from '../../common/responses/price'
import { DiscountCode } from './discount-code'

export interface Basket {
  id: string
  totalPrice: Price
  totalItems: number
  items: BasketItem[]
  discountCodes?: DiscountCode[]
  customer?: {
    email: string
  }
  billingAddress?: Address
  shipments?: Shipment[]
}

export interface AddBasketItem {
  basket: Basket
  itemAdded: boolean
}
