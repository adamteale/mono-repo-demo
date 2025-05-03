import { CMSLink } from '../common'

export interface CMSRichText {
  textAlignment?: 'center' | 'start' | 'end'
  variant:
    | 'default'
    | 'error-page'
    | 'header-sticky-bar'
    | 'ml-vertical'
    | 'ml-dropdown'
    | 'tm-checkout-completed'
    | 'contact-us'
  content: unknown // needs to be normalized to RichTextBody
  title?: string | undefined
  button?: CMSLink
  contentTypeId?: string
}
