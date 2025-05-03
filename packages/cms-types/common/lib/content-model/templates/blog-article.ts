import { CMSImage, CMSVideo } from '../common'
import { CMSMedia } from '../molecules'
import { CMSImageBlock, CMSRichText } from '../organisms'

export interface CMSBlogArticle {
  tagLabel?: string
  category?: string
  title: string
  description: string
  media: CMSMedia
  authorName: string
  authorPicture?: CMSImage
  authorSectionTextColor: 'primary' | 'secondary'
  publicationDate: string
  keywords?: string[]
  blocks?: Array<CMSVideo | CMSImageBlock | CMSRichText | CMSImageBlock>
}
