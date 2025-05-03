import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeFilterFields {
  entryTitle: EntryFieldTypes.Symbol
  type: EntryFieldTypes.Symbol<'color' | 'list' | 'list-range' | 'size'>
  title: EntryFieldTypes.Symbol
  key: EntryFieldTypes.Symbol
  identifier?: EntryFieldTypes.Symbol
  initiallyOpen: EntryFieldTypes.Boolean
  seeAllLabel?: EntryFieldTypes.Symbol
  seeLessLabel?: EntryFieldTypes.Symbol
  noResultLabel?: EntryFieldTypes.Symbol
  /** Should only allow integers on Contentful (regex: `^[0-9]*$`). Defaults to 5 */
  sliceAmount?: EntryFieldTypes.Integer
  searchPlaceholder?: EntryFieldTypes.Symbol
  listRangeVariant?: EntryFieldTypes.Symbol<'preset' | 'custom'>
  minSearchPlaceholder?: EntryFieldTypes.Symbol
  maxSearchPlaceholder?: EntryFieldTypes.Symbol
  searchButtonLabel?: EntryFieldTypes.Symbol
  priceMetadata?: EntryFieldTypes.Object<{
    currency: 'USD'
  }>
  priceRanges?: EntryFieldTypes.Object<
    {
      min: number
      max: number
    }[]
  >
}

export type TypeFilterSkeleton = EntrySkeletonType<TypeFilterFields, 'smFilter'>
export type ContentfulFilter = Entry<TypeFilterSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
