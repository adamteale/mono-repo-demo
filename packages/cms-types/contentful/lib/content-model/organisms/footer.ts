import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMenuSubItemSkeleton } from '../molecules/menu-sub-item'
import { TypeMediaSkeleton } from '../molecules/media'

interface TypeFooterFields {
  brandImage: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  brandUrl: EntryFieldTypes.Symbol
  description?: EntryFieldTypes.Symbol
  copyright?: EntryFieldTypes.Symbol
  menuItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMenuSubItemSkeleton>>
  newsletter?: EntryFieldTypes.Object<{
    title?: string
    description?: string
    inputText?: string
    buttonText?: string
  }>
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, 'orFooter'>

export type ContentfulFooter = Entry<TypeFooterSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
