import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeCardSkeleton } from '../molecules/card'
import { TypeVerticalSkeleton } from '../molecules/vertical'
import { TypeRichTextSkeleton } from './rich-text'

interface TypeContainerFields {
  title?: EntryFieldTypes.Symbol
  titleAlign?: EntryFieldTypes.Symbol<'start' | 'center'>
  subHeading?: EntryFieldTypes.Symbol
  supportingText?: EntryFieldTypes.Symbol
  hasParagraphs: EntryFieldTypes.Boolean
  paragraphLayout?: EntryFieldTypes.Symbol<'horizontal' | 'vertical'>
  background?: EntryFieldTypes.Symbol<'primary' | 'secondary'>
  columns: EntryFieldTypes.Symbol<'four' | 'three' | 'two'>
  columnsTablet: EntryFieldTypes.Symbol<'one' | 'three' | 'two'>
  columnsMobile: EntryFieldTypes.Symbol<'one' | 'two'>
  columnsSmallMobile: EntryFieldTypes.Symbol<'one' | 'two'>
  blocks: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeCardSkeleton | TypeVerticalSkeleton | TypeRichTextSkeleton>
  >
}

export type TypeContainerSkeleton = EntrySkeletonType<TypeContainerFields, 'orContainer'>

export type ContentfulContainer = Entry<TypeContainerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
