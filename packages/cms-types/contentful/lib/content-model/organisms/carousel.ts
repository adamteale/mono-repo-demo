import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeProductSkeleton } from '../semantics/product'
import { TypeHeroBannerSkeleton } from './hero-banner'

interface TypeCarouselFields {
  title?: EntryFieldTypes.Symbol
  linkLabel?: EntryFieldTypes.Symbol
  linkUrl?: EntryFieldTypes.Symbol
  layout: EntryFieldTypes.Symbol<'default' | 'banner'>
  items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProductSkeleton | TypeHeroBannerSkeleton>>
}

export type TypeCarouselSkeleton = EntrySkeletonType<TypeCarouselFields, 'orCarousel'>

export type ContentfulCarousel = Entry<TypeCarouselSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
