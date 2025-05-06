import { Price } from '../../common/responses'
import { Address } from './address'
import { BasketItem } from './basket-item'
import { Shipment } from './shipment'

export interface CommerceOrder {
  id: string
  orderStatus: string
  orderNumber: string | number
  totalPrice: Price
  items: BasketItem[]
  paymentStatus?: string
  shipmentStatus?: string
  shipments?: Shipment[]
  billingAddress?: Address
  createdAt?: string
  updatedAt?: string
}
