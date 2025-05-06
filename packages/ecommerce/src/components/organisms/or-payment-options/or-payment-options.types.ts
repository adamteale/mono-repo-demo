import {
  AtButtonProps,
  AtImageProps,
  AtRadioProps,
  OrFormProps,
} from "@mono-repo-demo/atomic-library";

export interface PaymentOption {
  radioProps: AtRadioProps;
  buttonProps: AtButtonProps;
  images: AtImageProps[];
  formProps?: Omit<OrFormProps, "manager">;
}

export interface OrPaymentOptionsProps {
  title: string;
  paymentOptions: PaymentOption[];
  dataTestId?: string;
  className?: string;
}
