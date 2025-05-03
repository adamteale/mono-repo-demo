import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeProductFields {
  identifier: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.RichText
  images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeProductSkeleton = EntrySkeletonType<TypeProductFields, 'objProduct'>

export type ContentfulProduct = Entry<TypeProductSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
