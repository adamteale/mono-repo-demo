import { CMSLink } from '../common'
import { CMSMedia, CMSMenuItem } from '../molecules'
import { CMSRichText } from './rich-text'

export interface CMSHeader {
  brandUrl: string
  brandImage: CMSMedia
  brandImageCheckout: CMSMedia
  menuItems?: CMSMenuItem[]
  topLinks?: CMSLink[]
  searchbox?: {
    placeholder?: string
    resultsTitle?: string
    suggestionsTitle?: string
    seeMoreResultsLabel?: string
    noResultsFoundLabel?: string
    resultsDisplayVariant?: string
  }
  popUpBasket?: {
    singleItemLabel?: string
    multipleItemsLabel?: string
    leftButtonActionUrl?: string
    leftButtonLabel?: string
    rightButtonActionUrl?: string
    rightButtonLabel?: string
    subTotalPriceLabel?: string
    title?: string
    totalPriceLabel?: string
  }
  stickBarContent?: CMSRichText
  userIconLink?: CMSLink
  contentTypeId?: string
}
