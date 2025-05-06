import { CMSRichText } from '../organisms'

export interface CMSContactUs {
  iconLinks: CMSRichText
  content: CMSRichText
  formFields?: {
    nameLabel?: string
    nameError?: string
    namePlaceholder?: string
    lastNameLabel?: string
    lastNameError?: string
    lastNamePlaceholder?: string
    emailLabel?: string
    emailError?: string
    emailPlaceholder?: string
    messageLabel?: string
    messageError?: string
    messagePlaceholder?: string
    buttonLabel?: string
  }
  contentTypeId?: string
}
