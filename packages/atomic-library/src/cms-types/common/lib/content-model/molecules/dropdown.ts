import { CMSRichText } from '../organisms'

export interface CMSDropdown {
  title: string
  content: CMSRichText
  initiallyOpen?: boolean
  contentTypeId?: string
}
