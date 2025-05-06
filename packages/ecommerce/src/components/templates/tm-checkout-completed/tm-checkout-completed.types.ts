import { AtButtonProps } from "@mono-repo-demo/atomic-library";

export interface TmCheckoutCompletedProps {
  successfullOrderTitle?: string;
  subtitle?: string;
  body?: React.ReactNode;
  button?: AtButtonProps;
  bottomText?: React.ReactNode;
  copyright?: string;
}
