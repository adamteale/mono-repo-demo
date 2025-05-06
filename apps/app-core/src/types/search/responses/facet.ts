import { RangeVariant } from '@components-library/common'

export interface ProductFacet {
  key: string
  count?: number
  results: (
    | {
        value: string
        count: number
      }
    | { from: number; to: number; count: number; rangeOrigin?: RangeVariant }
  )[]
}
