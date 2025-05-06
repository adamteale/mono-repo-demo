import { AddressDto } from './address.dto'

export interface CustomerDataDto {
  email?: string
  billingAddress?: AddressDto
  shippingSameAsBilling?: boolean
  billingSameAsShipping?: boolean
  shippingAddress?: AddressDto
}
