import { CMSImage } from '../common'
import { CMSRichText } from './rich-text'

export interface CmsImageInteractiveBlock {
  subtitle: string
  body: CMSRichText
  images: CMSImage[]
  contentTypeId?: string
}
