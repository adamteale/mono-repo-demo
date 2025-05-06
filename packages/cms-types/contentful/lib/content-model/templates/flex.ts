import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeRichTextSkeleton } from '../organisms/rich-text'
import { TypeContainerSkeleton } from '../organisms/container'
import { TypeCarouselSkeleton } from '../organisms/carousel'
import { TypeQuoteSkeleton } from '../molecules'
import {
  TypeHeroBannerSkeleton,
  TypeBrandsContainerSkeleton,
  TypeMetricsSkeleton,
  TypeTeamSectionSkeleton,
  TypeContentStripSkeleton,
} from '../organisms'

interface TypeFlexFields {
  blocks?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeRichTextSkeleton
      | TypeCarouselSkeleton
      | TypeContainerSkeleton
      | TypeHeroBannerSkeleton
      | TypeQuoteSkeleton
      | TypeBrandsContainerSkeleton
      | TypeMetricsSkeleton
      | TypeTeamSectionSkeleton
      | TypeContentStripSkeleton
    >
  >
}

export type TypeFlexSkeleton = EntrySkeletonType<TypeFlexFields, 'tmFlex'>
export type ContentfulFlex = Entry<TypeFlexSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
