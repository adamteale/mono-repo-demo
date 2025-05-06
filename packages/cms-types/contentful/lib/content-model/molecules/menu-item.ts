import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMenuSubItemSkeleton } from './menu-sub-item'

interface TypeMenuItemFields {
  titleLabel: EntryFieldTypes.Symbol
  titleUrl?: EntryFieldTypes.Symbol
  children?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMenuSubItemSkeleton>>
}

export type TypeMenuItemSkeleton = EntrySkeletonType<TypeMenuItemFields, 'mlMenuItem'>

export type ContentfulMenuItem = Entry<TypeMenuItemSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
