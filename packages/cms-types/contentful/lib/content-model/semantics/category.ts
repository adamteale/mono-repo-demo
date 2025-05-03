import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeCategoryFields {
  title: EntryFieldTypes.Symbol
  reference?: EntryFieldTypes.Symbol
  /** Should have this regex set on Contentful: `/^[0-9a-z-]+$/` (without the slashes) */
  slug?: EntryFieldTypes.Symbol
  parent?: EntryFieldTypes.EntryLink<TypeCategorySkeleton>
}

export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, 'smCategory'>

export type ContentfulCategory = Entry<TypeCategorySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
