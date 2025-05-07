import { AtButtonProps } from "@mono-repo-demo/atomic-library";
import { OrFormControls } from "@mono-repo-demo/atomic-library";
import { OrFormState } from "@mono-repo-demo/atomic-library";

export interface TmLoginProps {
  handleSubmit: (state: OrFormState) => void;
  formControls: OrFormControls;
  formButton: AtButtonProps;
  showGuestSection?: boolean;
  showLoginSection?: boolean;
  labels?: {
    newCustomersTitle?: string;
    newCustomersSubtitle?: string;
    guestButtonLabel?: string;
    returningCustomerTitle?: string;
    returningCustomerSubtitle?: string;
    googleButtonLabel?: string;
  };
  signUp?: {
    text?: string;
    linkLabel?: string;
    signUpHref?: string;
  };
  copyright: string;
}
