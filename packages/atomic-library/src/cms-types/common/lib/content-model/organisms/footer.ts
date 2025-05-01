import { CMSMenuSubItem } from '../molecules'
import { CMSMedia } from '../molecules/media'

export interface CMSFooter {
  brandImage: CMSMedia
  brandUrl: string
  description?: string
  copyright?: string
  menuItems: CMSMenuSubItem[]
  newsletter?: {
    title?: string
    description?: string
    inputText?: string
    buttonText?: string
  }
  contentTypeId?: string
}
