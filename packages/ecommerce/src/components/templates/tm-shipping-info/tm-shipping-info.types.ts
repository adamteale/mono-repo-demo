import {
  AtButtonProps,
  MlFormFieldProps,
  OrFormControls,
} from "@mono-repo-demo/atomic-library";
import { OrOrderSummaryProps } from "../../organisms";
import { OrFormManager } from "@components-library/common/src/components/organisms/or-form/use-or-form";

export interface OrderShippingInfoForm {
  fields: OrderShippingInfoFormFields;
}

export interface DeliveryMethodsForm {
  fields: DeliveryMethodsFormFields;
}

export interface DeliveryMethodsFormFields {
  deliveryMethodsTitle: MlFormFieldProps;
  subtitle: MlFormFieldProps;
}

export interface OrderContactInformationFormFields {
  contactInformationTitle: MlFormFieldProps;
  email: MlFormFieldProps;
}

export interface OrderShippingAddressFormFields extends OrFormControls {
  shippingTitle: MlFormFieldProps;
  shippingFirstName: MlFormFieldProps;
  shippingLastName: MlFormFieldProps;
  shippingAddress: MlFormFieldProps;
  shippingStreetNumber: MlFormFieldProps;
  shippingAdditionalInfo: MlFormFieldProps;
  shippingCountry: MlFormFieldProps;
  shippingState: MlFormFieldProps;
  shippingCity: MlFormFieldProps;
  shippingZipCode: MlFormFieldProps;
  shippingPhoneNumber: MlFormFieldProps;
  useAsBilling: MlFormFieldProps;
}

export interface OrderBillingAddressFormFields extends OrFormControls {
  billingTitle: MlFormFieldProps;
  billingFirstName: MlFormFieldProps;
  billingLastName: MlFormFieldProps;
  billingAddress: MlFormFieldProps;
  billingStreetNumber: MlFormFieldProps;
  billingAdditionalInfo: MlFormFieldProps;
  billingCountry: MlFormFieldProps;
  billingState: MlFormFieldProps;
  billingCity: MlFormFieldProps;
  billingZipCode: MlFormFieldProps;
  billingPhoneNumber: MlFormFieldProps;
}

export interface DeliveryMethodsFormFields extends OrFormControls {
  deliveryMethodsTitle: MlFormFieldProps;
  subtitle: MlFormFieldProps;
}

type OrderBaseFormFields = OrderContactInformationFormFields &
  OrderShippingAddressFormFields;
export type OrderShippingInfoFormFields = OrderBaseFormFields &
  Partial<OrderBillingAddressFormFields>;
export interface TmShippingInfoProps {
  orderSummaryProps: OrOrderSummaryProps;
  copyright: string;
  shippingFormData: {
    formFields: OrderShippingInfoForm;
    submitButton?: AtButtonProps;
    onSubmitForm: (formData: { values: any }) => any;
    formManager: OrFormManager;
  };
  deliveryMethodsFormData?: {
    formFields: DeliveryMethodsForm;
    submitButton: AtButtonProps;
    onSubmitForm: (formData: { values: any }) => any;
    formManager: OrFormManager;
  };
}
