export interface CMSLogin {
  labels?: {
    newCustomersTitle?: string
    newCustomersSubtitle?: string
    guestButtonLabel?: string
    returningCustomerTitle?: string
    returningCustomerSubtitle?: string
    googleButtonLabel?: string
  }
  form?: {
    emailLabel?: string
    emailPlaceholder?: string
    passwordLabel?: string
    passwordPlaceholder?: string
    rememberMeLabel?: string
    forgotPasswordLabel?: string
    forgotPasswordHref?: string
    submitButtonLabel?: string
  }
  signUp?: {
    text?: string
    linkLabel?: string
    signUpHref?: string
  }
  copyrightText?: string
  contentTypeId?: string
}
