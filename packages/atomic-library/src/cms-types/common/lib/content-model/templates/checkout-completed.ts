import { CMSRichText } from '../organisms'

export interface CMSCheckoutCompleted {
  title?: string
  subtitle?: string
  body?: CMSRichText
  buttonLabel?: string
  buttonUrl?: string
  bottomText?: any
  copyrightText?: string
  contentTypeId?: string
}
