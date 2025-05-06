import { CMSQuote } from '../molecules'
import {
  CMSContainer,
  CMSCarousel,
  CMSBrandsContainer,
  CMSMetrics,
  CMSTeamSection,
  CMSHeroBanner,
  CMSListing,
  CMSRichText,
} from '../organisms'

export interface CMSFlex {
  blocks?: Array<FlexBlocks>
  contentTypeId?: string
}

type FlexBlocks =
  | CMSContainer
  | CMSRichText
  | CMSCarousel
  | CMSBrandsContainer
  | CMSMetrics
  | CMSQuote
  | CMSTeamSection
  | CMSHeroBanner
  | CMSListing
