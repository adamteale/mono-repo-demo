import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeCategorySkeleton } from '../semantics/category'

interface TypeCatalogFields {
  category: EntryFieldTypes.EntryLink<TypeCategorySkeleton>
  useFiltersAsPath?: EntryFieldTypes.Boolean
}

export type TypeCatalogSkeleton = EntrySkeletonType<TypeCatalogFields, 'tmCatalog'>
export type ContentfulCatalog = Entry<TypeCatalogSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
