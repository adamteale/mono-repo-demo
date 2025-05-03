import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeFilterSkeleton } from './filter'

interface TypeGlobalConfigFields {
  site: EntryFieldTypes.Symbol<'Default'>
  filters?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFilterSkeleton>>
  sortByFilterOptions?: EntryFieldTypes.Object<
    {
      label: string
      order: 'ascendant' | 'descendant'
      sort: 'price' | 'name'
    }[]
  >
  catalogLabels?: EntryFieldTypes.Object<{
    sortByLabel?: string
    resultCountLabel?: string
    seeMoreLabel?: string
    filterTitle?: string
    filterModalOpenFiltersLabel?: string
    filterModalShowResultsLabel?: string
    filterModalTitle?: string
    filterModalCloseIconLabel?: string
    homeBreadcrumbLabel?: string
    searchTitle?: string
    noResultLabel?: string
  }>
  colorPickerLabels?: EntryFieldTypes.Object<{
    beige: string
    black: string
    blue: string
    brown: string
    gold: string
    green: string
    grey: string
    oliv: string
    lightBlue: string
    orange: string
    petrol: string
    pink: string
    purple: string
    red: string
    silver: string
    turquoise: string
    white: string
    yellow: string
  }>
}

type TypeGlobalConfigSkeleton = EntrySkeletonType<TypeGlobalConfigFields, 'smGlobalConfig'>
export type ContentfulGlobalConfig = Entry<TypeGlobalConfigSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
