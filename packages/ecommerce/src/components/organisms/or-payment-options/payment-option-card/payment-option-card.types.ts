import {
  AtImageProps,
  AtRadioProps,
  OrFormProps,
} from "@mono-repo-demo/atomic-library";

export interface PaymentOptionCardProps {
  radioProps: AtRadioProps;
  formProps?: Omit<OrFormProps, "manager">;
  images?: AtImageProps[];
  dataTestId?: string;
}
