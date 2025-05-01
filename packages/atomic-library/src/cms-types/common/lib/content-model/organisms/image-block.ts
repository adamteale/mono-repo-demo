import { CMSMedia } from '../molecules'
import { CMSRichText } from './rich-text'

export interface CMSImageBlock {
  title: string
  images: CMSMedia[]
  body: CMSRichText
  subtitle?: string
  pretitle?: string
  supportText?: string
  isInverted?: boolean
  isVertical?: boolean
  contentTypeId?: string
}
