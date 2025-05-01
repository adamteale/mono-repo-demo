import { CMSMedia } from '../molecules'

export interface CMSProduct {
  identifier: string
  description?: React.ReactNode
  images?: CMSMedia[] // might be an image and not ml-media
  contentTypeId?: string
}
