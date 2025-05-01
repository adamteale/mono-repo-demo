import { CMSImage, CMSLink } from '../common'
import { CMSMedia } from '../molecules'

export interface CMSHeroBanner {
  layoutType: 'contained' | 'fluid'
  variant: 'contentBanner' | 'imageBanner'
  authorName?: string
  authorPicture?: CMSImage
  publicationDate?: string
  authorSectionTextColor?: 'primary' | 'secondary'
  tagLabel?: string
  pretitle?: string
  title: string
  showDivider?: boolean
  subtitle?: string
  buttons?: CMSLink[]
  showTextBackground?: boolean
  image?: CMSMedia
  align?: 'left' | 'right'
  mobileAlign?: 'top' | 'center'
  contentTypeId?: string
}
