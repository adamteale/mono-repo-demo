import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { ContentfulJsonLink } from '../json/link'
import { TypeMediaSkeleton } from './media'

interface TypeVerticalFields {
  title: EntryFieldTypes.Symbol
  body?: EntryFieldTypes.RichText
  image?: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  icon?: EntryFieldTypes.Symbol<'badge' | 'heart' | 'plane' | 'reload' | 'shopping-bag' | 'user'>
  button?: EntryFieldTypes.Object<ContentfulJsonLink>
  align?: EntryFieldTypes.Symbol<'center' | 'start'>
}

export type TypeVerticalSkeleton = EntrySkeletonType<TypeVerticalFields, 'mlVertical'>

export type ContentfulVertical = Entry<TypeVerticalSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
