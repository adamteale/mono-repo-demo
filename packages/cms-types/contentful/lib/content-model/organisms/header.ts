import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'
import { TypeMenuItemSkeleton } from '../molecules/menu-item'
import { ContentfulJsonLink } from '../json/link'
import { TypeMediaSkeleton } from '../molecules/media'

export interface TypeHeaderFields {
  brandUrl: EntryFieldTypes.Symbol
  brandImage: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  brandImageCheckout: EntryFieldTypes.EntryLink<TypeMediaSkeleton>
  menuItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeMenuItemSkeleton>>
  topLinks?: EntryFieldTypes.Object<ContentfulJsonLink[]>
  searchbox?: EntryFieldTypes.Object<{
    placeholder?: string
    resultsTitle?: string
    suggestionsTitle?: string
    seeMoreResultsLabel?: string
    noResultsFoundLabel?: string
    resultsDisplayVariant?: string
  }>
  popUpBasket?: EntryFieldTypes.Object<{
    singleItemLabel?: string
    multipleItemsLabel?: string
    leftButtonActionUrl?: string
    leftButtonLabel?: string
    rightButtonActionUrl?: string
    rightButtonLabel?: string
    subTotalPriceLabel?: string
    title?: string
    totalPriceLabel?: string
  }>
  stickBarContent?: EntryFieldTypes.RichText
  userIconLink?: EntryFieldTypes.Object<ContentfulJsonLink[]>
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, 'orHeader'>

export type ContentfulHeader = Entry<TypeHeaderSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
