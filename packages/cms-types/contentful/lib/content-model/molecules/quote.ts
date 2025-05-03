import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeQuoteFields {
  heading: EntryFieldTypes.Symbol
  quoteText: EntryFieldTypes.Symbol
  authorImage?: EntryFieldTypes.AssetLink
  authorInfo: EntryFieldTypes.Object<{ name: string; role: string }>
}

export type TypeQuoteSkeleton = EntrySkeletonType<TypeQuoteFields, 'mlQuote'>

export type ContentfulQuote = Entry<TypeQuoteSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
