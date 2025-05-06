import { CMSLink } from '../common'
import { CMSMedia } from './media'
import { CMSRichText } from '../organisms/rich-text'

export interface CMSVertical {
  title: string
  body?: CMSRichText
  image?: CMSMedia
  align?: 'center' | 'start'
  icon?: 'badge' | 'heart' | 'plane' | 'reload' | 'shopping-bag' | 'user' 
  button?: CMSLink
  contentTypeId?: string
}
