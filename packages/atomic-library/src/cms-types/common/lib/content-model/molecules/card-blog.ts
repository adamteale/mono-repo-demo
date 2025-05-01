import { CMSLink } from '../common'
import { CMSMedia } from './media'

export interface CMSCardBlog {
  title: string
  image: CMSMedia
  link: CMSLink
  category: string
  publicationDate: string
  author: string
  description: string
  contentTypeId: string
}
