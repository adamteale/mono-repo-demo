import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeRichTextSkeleton } from '../organisms/rich-text'

interface CheckoutCompletedFields {
  title?: EntryFieldTypes.Symbol
  subtitle?: EntryFieldTypes.Symbol
  body?: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>
  buttonLabel?: EntryFieldTypes.Symbol
  buttonUrl?: EntryFieldTypes.Symbol
  bottomText?: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>
  copyrightText?: EntryFieldTypes.Symbol
}

export type TypeCheckoutCompletedSkeleton = EntrySkeletonType<CheckoutCompletedFields, 'tmCheckoutCompleted'>
export type ContentfulCheckoutCompleted = Entry<TypeCheckoutCompletedSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
