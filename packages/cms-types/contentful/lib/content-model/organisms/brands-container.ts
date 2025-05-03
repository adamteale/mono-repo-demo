import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeBrandSkeleton } from '../molecules/brand'

interface TypeBrandsContainerFields {
  title: EntryFieldTypes.Symbol
  seeMoreLabel?: EntryFieldTypes.Symbol
  showLink: EntryFieldTypes.Boolean
  blocks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBrandSkeleton>>
  background?: EntryFieldTypes.Symbol<'primary' | 'secondary'>
}

export type TypeBrandsContainerSkeleton = EntrySkeletonType<TypeBrandsContainerFields, 'orBrandsContainer'>

export type ContentfulBrandsContainer = Entry<TypeBrandsContainerSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
