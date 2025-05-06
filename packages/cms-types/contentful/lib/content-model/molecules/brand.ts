import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from './media'

interface TypeBrandFields {
  actionUrl?: EntryFieldTypes.Symbol
  image: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
}

export type TypeBrandSkeleton = EntrySkeletonType<TypeBrandFields, 'mlBrand'>

export type ContentfulBrand = Entry<TypeBrandSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
