import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from './media'

interface TypeCardFields {
  image: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  label: EntryFieldTypes.Symbol
  actionUrl: EntryFieldTypes.Symbol
}

export type TypeCardSkeleton = EntrySkeletonType<TypeCardFields, 'mlCard'>

export type ContentfulCard = Entry<TypeCardSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
