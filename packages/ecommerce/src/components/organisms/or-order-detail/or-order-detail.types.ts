import {
  AtButtonProps,
  AtImageProps,
  AtLinkProps,
  MlFormFieldProps,
} from "@mono-repo-demo/atomic-library";
import { FormEventHandler } from "react";

export interface OrOrderDetailItem {
  title: string;
  link: AtLinkProps;
  details: { label: string; value?: string }[];
  image?: AtImageProps;
}

export interface OrOrderDetailProps {
  title: string;
  detailItems: OrOrderDetailItem[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  formButton: AtButtonProps;
  formCheckbox: MlFormFieldProps;
  className?: string;
  dataTestId?: string;
}
