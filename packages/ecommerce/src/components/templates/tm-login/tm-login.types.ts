import { AtButtonProps } from '@components-library/common/src/components/atoms'
import { OrFormControls } from '@components-library/common/src/components/organisms'
import { OrFormState } from '@components-library/common/src/components/organisms/or-form/use-or-form'

export interface TmLoginProps {
  handleSubmit: (state: OrFormState) => void
  formControls: OrFormControls
  formButton: AtButtonProps
  showGuestSection?: boolean
  showLoginSection?: boolean
  labels?: {
    newCustomersTitle?: string
    newCustomersSubtitle?: string
    guestButtonLabel?: string
    returningCustomerTitle?: string
    returningCustomerSubtitle?: string
    googleButtonLabel?: string
  }
  signUp?: {
    text?: string
    linkLabel?: string
    signUpHref?: string
  }
  copyright: string
}
