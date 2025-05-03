import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { ContentfulJsonLink } from '../json/link'
import { TypeMediaSkeleton } from '../molecules/media'

interface TypeHeroBannerFields {
  layoutType: EntryFieldTypes.Symbol<'contained' | 'fluid'>
  variant: EntryFieldTypes.Symbol<'contentBanner' | 'imageBanner'>
  authorName?: EntryFieldTypes.Symbol
  authorPicture?: EntryFieldTypes.AssetLink
  publicationDate?: EntryFieldTypes.Symbol
  authorSectionTextColor?: EntryFieldTypes.Symbol<'primary' | 'secondary'>
  tagLabel?: EntryFieldTypes.Symbol
  pretitle?: EntryFieldTypes.Symbol
  title: EntryFieldTypes.Symbol
  showDivider?: EntryFieldTypes.Boolean
  subtitle?: EntryFieldTypes.Symbol
  buttons?: EntryFieldTypes.Object<ContentfulJsonLink[]>
  image?: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  align?: EntryFieldTypes.Symbol<'center' | 'left' | 'right'>
}

export type TypeHeroBannerSkeleton = EntrySkeletonType<TypeHeroBannerFields, 'orHeroBanner'>

export type ContentfulHeroBanner = Entry<TypeHeroBannerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
