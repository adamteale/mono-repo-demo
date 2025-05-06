import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from '../molecules/media'
import { TypeRichTextSkeleton } from './rich-text'

interface TypeImageBlockFields {
  title: EntryFieldTypes.Symbol
  images?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMediaSkeleton>>
  body?: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>
  subtitle?: EntryFieldTypes.Symbol
  pretitle?: EntryFieldTypes.Symbol
  supportText?: EntryFieldTypes.Symbol
  isInverted?: EntryFieldTypes.Boolean
  isVertical?: EntryFieldTypes.Boolean
}

export type TypeImageBlockSkeleton = EntrySkeletonType<TypeImageBlockFields, 'orImageBlock'>

export type ContentfulImageBlock = Entry<TypeImageBlockSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
