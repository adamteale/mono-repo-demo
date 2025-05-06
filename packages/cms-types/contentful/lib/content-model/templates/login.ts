import type { EntrySkeletonType, EntryFieldTypes, Entry } from 'contentful'

interface TypeLoginFields {
  labels?: EntryFieldTypes.Object<{
    newCustomersTitle?: string
    newCustomersSubtitle?: string
    guestButtonLabel?: string
    returningCustomerTitle?: string
    returningCustomerSubtitle?: string
    googleButtonLabel?: string
  }>
  form?: EntryFieldTypes.Object<{
    emailLabel?: string
    emailPlaceholder?: string
    passwordLabel?: string
    passwordPlaceholder?: string
    rememberMeLabel?: string
    forgotPasswordLabel?: string
    forgotPasswordHref?: string
    submitButtonLabel?: string
  }>
  signUp?: EntryFieldTypes.Object<{
    text?: string
    linkLabel?: string
    signUpHref?: string
  }>
}

export type TypeLoginSkeleton = EntrySkeletonType<TypeLoginFields, 'tmLogin'>
export type ContentfulLogin = Entry<TypeLoginSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
