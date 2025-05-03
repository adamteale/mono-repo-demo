import { Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful'
import { TypeRichTextSkeleton } from '../organisms/rich-text'

interface TypeContactUsFields {
  iconLinks: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>
  content: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>
  formFields?: EntryFieldTypes.Object<{
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
  }>
}

export type TypeContactUsSkeleton = EntrySkeletonType<TypeContactUsFields, 'tmContactUs'>

export type ContentfulContactUs = Entry<TypeContactUsSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
