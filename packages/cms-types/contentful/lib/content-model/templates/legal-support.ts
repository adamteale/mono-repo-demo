import { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful'
import { TypeMenuItemSkeleton } from '../molecules'
import { TypeRichTextSkeleton } from '../organisms'

interface TypeLegalSupport {
  title: EntryFieldTypes.Symbol
  menuTitle: EntryFieldTypes.Symbol
  menuItems: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMenuItemSkeleton>>
  blocks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeRichTextSkeleton>>
}

export type TypeLegalSupportSkeleton = EntrySkeletonType<TypeLegalSupport, 'tmLegalSupport'>
export type ContentfulLegalSupport = Entry<TypeLegalSupportSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
