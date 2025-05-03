import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMediaSkeleton } from './media'
import { ContentfulJsonLink } from '../json'

interface TypeCardBlogFields {
  title: EntryFieldTypes.Symbol
  image: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  link: EntryFieldTypes.Object<ContentfulJsonLink>
  category: EntryFieldTypes.Symbol
  publicationDate: EntryFieldTypes.Symbol
  author: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Symbol
}

export type TypeCardBlogSkeleton = EntrySkeletonType<TypeCardBlogFields, 'mlCardBlog'>

export type ContentfulCardBlog = Entry<TypeCardBlogSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
