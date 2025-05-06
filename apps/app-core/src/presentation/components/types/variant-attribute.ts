import { Price } from '.'

export interface VariantEnumAttributeValue {
  key?: string
  label: string
}

export type VariantAttributeValue = boolean | string | number | Price | VariantEnumAttributeValue

export interface VariantAttribute {
  name: string
  value: VariantAttributeValue | VariantAttributeValue[]
}
