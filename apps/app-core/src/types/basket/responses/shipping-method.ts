import { DeliveryLeadTime } from './delivery-lead-time'
import { Price } from '../../common/responses/price'

export interface ShippingMethod {
  id: string
  name: string
  price: Price
  shipmentId?: string
  freeOverPrice?: Price
  deliveryLeadTime?: DeliveryLeadTime
}
