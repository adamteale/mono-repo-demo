import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { ContentfulJsonLink } from '../json'

interface TypeRichTextFields {
  textAlignment: EntryFieldTypes.Symbol<'center' | 'end' | 'start'>
  variant: EntryFieldTypes.Symbol<
    'default' | 'error-page' | 'header-sticky-bar' | 'ml-vertical' | 'ml-dropdown' | 'contact-us'
  >
  content: EntryFieldTypes.RichText
  title?: EntryFieldTypes.Symbol
  button?: EntryFieldTypes.Object<ContentfulJsonLink>
}

export type TypeRichTextSkeleton = EntrySkeletonType<TypeRichTextFields, 'orRichText'>

export type ContentfulRichText = Entry<TypeRichTextSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
