import { CMSImage } from '../common'

export interface CMSQuote {
  heading: string
  quoteText: string
  authorImage?: CMSImage
  authorInfo: { name: string; role: string }
  contentTypeId?: string
}
