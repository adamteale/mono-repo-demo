import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from '../molecules/media'
import { ContentfulJsonLink } from '../json'

interface TypeContentStripFields {
  align?: EntryFieldTypes.Symbol<'left' | 'right'>
  title?: EntryFieldTypes.Symbol
  subtitle?: EntryFieldTypes.Symbol
  paragraph?: EntryFieldTypes.Symbol
  firstItem?: EntryFieldTypes.Symbol
  secondItem?: EntryFieldTypes.Symbol
  thirdItem?: EntryFieldTypes.Symbol
  link?: EntryFieldTypes.Object<ContentfulJsonLink>
  image?: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  backgroundColor: EntryFieldTypes.Symbol<'primary' | 'secondary'>
  listType: EntryFieldTypes.Symbol<'bullet' | 'check' | 'number'>
  layoutType: EntryFieldTypes.Symbol<'contained' | 'fluid'>

}

export type TypeContentStripSkeleton = EntrySkeletonType<TypeContentStripFields, 'orContentStrip'>

export type ContentfulContentStrip = Entry<TypeContentStripSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
