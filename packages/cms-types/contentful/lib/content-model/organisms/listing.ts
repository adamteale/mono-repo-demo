import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeCardBlogSkeleton } from '../molecules'

interface TypeListingFields {
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardBlogSkeleton>>
}

export type TypeListingSkeleton = EntrySkeletonType<TypeListingFields, 'orListing'>

export type ContentfulListing = Entry<TypeListingSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
