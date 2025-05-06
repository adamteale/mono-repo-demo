import { CMSBrand, CMSMedia } from '../molecules'
import { CMSCard } from '../molecules/card'
import { CMSVertical } from '../molecules/vertical'
import { CMSHeroBanner } from './hero-banner'
import { CMSBrandsContainer } from './brands-container'
import { CMSCarousel } from './carousel'
import { CMSRichText } from './rich-text'

export interface CMSContainer {
  title?: string
  titleAlign?: 'start' | 'center'
  subHeading?: string
  supportingText?: string
  hasParagraphs: boolean
  paragraphLayout?: 'horizontal' | 'vertical'
  background: 'primary' | 'secondary'
  columns: 'four' | 'three' | 'two'
  columnsTablet: 'one' | 'three' | 'two'
  columnsMobile: 'one' | 'two'
  columnsSmallMobile: 'one' | 'two'
  blocks: Array<
    | CMSCarousel
    | CMSContainer
    | CMSBrand
    | CMSMedia
    | CMSCard
    | CMSVertical
    | CMSBrandsContainer
    | CMSHeroBanner
    | CMSRichText
  >
  contentTypeId?: string
}
