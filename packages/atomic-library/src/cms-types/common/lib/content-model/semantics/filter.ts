export interface CMSFilter {
  type: 'color' | 'list' | 'list-range' | 'size'
  title: string
  entryTitle: string
  key: string
  identifier?: string
  initiallyOpen: boolean
  seeAllLabel?: string
  seeLessLabel?: string
  noResultLabel?: string
  /** Should only allow integers on Contentful (regex: `^[0-9]*$`). Defaults to 5 */
  sliceAmount?: number
  searchPlaceholder?: string
  listRangeVariant?: 'preset' | 'custom'
  minSearchPlaceholder?: string
  maxSearchPlaceholder?: string
  searchButtonLabel?: string
  priceMetadata?: {
    currency: 'USD'
  }
  priceRanges?: {
    min: number
    max: number
  }[]
  contentTypeId?: string
}
