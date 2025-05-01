import { CMSMedia } from './media'

export interface CMSCard {
  image: CMSMedia
  label: string
  actionUrl: string
  contentTypeId?: string
}
