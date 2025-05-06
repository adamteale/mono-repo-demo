import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { ContentfulJsonLink } from '../json/link'

interface TypeMenuSubItemFields {
  titleLabel: EntryFieldTypes.Symbol
  titleUrl?: EntryFieldTypes.Symbol
  children: EntryFieldTypes.Object<ContentfulJsonLink[]>
}

export type TypeMenuSubItemSkeleton = EntrySkeletonType<TypeMenuSubItemFields, 'mlMenuSubItem'>

export type ContentfulMenuSubItem = Entry<TypeMenuSubItemSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
