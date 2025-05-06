import { CMSLink } from '../common'
import { CMSMedia } from '../molecules/media'

export interface CMSContentStrip {
  align?: 'left' | 'right'
  title?: string
  subtitle?: string
  paragraph?: string
  firstItem?: string
  secondItem?: string
  thirdItem?: string
  link?: CMSLink
  image?: CMSMedia
  backgroundColor?: 'primary' | 'secondary'
  listType?: 'bullet' | 'check' | 'number'
  layoutType: 'contained' | 'fluid'
  contentTypeId?: string
}
