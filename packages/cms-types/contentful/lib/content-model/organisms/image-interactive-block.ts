import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeRichTextSkeleton } from './rich-text'

interface TypeImageInteractiveBlockFields {
  subtitle: EntryFieldTypes.Symbol
  body: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeImageInteractiveBlock = EntrySkeletonType<TypeImageInteractiveBlockFields, 'orImageInteractiveBlock'>

export type ContentfulImageInteractiveBlock = Entry<TypeImageInteractiveBlock, 'WITHOUT_UNRESOLVABLE_LINKS', string>
