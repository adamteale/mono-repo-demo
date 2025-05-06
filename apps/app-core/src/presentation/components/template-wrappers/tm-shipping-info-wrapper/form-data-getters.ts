import { SetStateAction } from "react";
import { ShippingInfoFormFields } from "@cms-types/contentful";
import {
  DeliveryMethodsFormFields,
  OrderBillingAddressFormFields,
  OrderContactInformationFormFields,
  OrderShippingAddressFormFields,
} from "@components-library/ecommerce";
import { ShippingMethod } from "../../../types/basket/responses/shipping-method";
import { MlFormFieldType } from "@mono-repo-demo/atomic-library";
import { Address } from "../../../types/basket/responses/address";

const emailValidator = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,18}$"
);
const phoneNumberValidator = new RegExp("^\\(\\+\\d{1,3}\\)\\s\\d{9,11}$");

const countryOptions = [
  { label: "Country 1", value: "US" },
  { label: "Country 2", value: "US" },
  { label: "Country 3", value: "US" },
];

const stateOptions = [
  { label: "State 1", value: "California" },
  { label: "State 2", value: "California" },
  { label: "State 3", value: "California" },
];

const cityOptions = [
  { label: "City 1", value: "California City" },
  { label: "City 2", value: "California City" },
  { label: "City 3", value: "California City" },
];

export const getBillingFormFields = (
  formLabels?: ShippingInfoFormFields,
  formValues?: Address
): OrderBillingAddressFormFields => {
  return {
    billingTitle: {
      type: MlFormFieldType.TITLE,
      label: formLabels?.billingTitle ?? "Billing Address",
      columnClass: "col-span-2",
      className: "pt-2 md:pt-3 mt-1 md:mt-3",
    },
    billingFirstName: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.firstNamePlaceholder ?? "First Name",
      label: formLabels?.firstNameLabel ?? "First Name",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.firstName,
    },
    billingLastName: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.lastNamePlaceholder ?? "Last Name",
      label: formLabels?.lastNameLabel ?? "Last Name",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.lastName,
    },
    billingAddress: {
      type: MlFormFieldType.SEARCH,
      placeholder: formLabels?.addressPlaceholder ?? "Search",
      label: formLabels?.addressLabel ?? "Address",
      columnClass: "col-span-2",
      required: true,
      value: formValues?.streetName,
    },
    billingStreetNumber: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.streetNumberPlaceholder ?? "Number",
      label: formLabels?.streetNumberLabel ?? "Number",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.streetNumber,
    },
    billingAdditionalInfo: {
      type: MlFormFieldType.INPUT,
      placeholder:
        formLabels?.addressAditionalInfoPlaceholder ??
        "Address Aditional Information",
      label:
        formLabels?.addressAditionalInfoLabel ??
        "Address Aditional Information",
      columnClass: "col-span-2 md:col-span-1",
      value: formValues?.additionalInfo,
    },
    billingCountry: {
      type: MlFormFieldType.SELECT,
      placeholder: formLabels?.countryPlaceholder ?? "Country",
      label: formLabels?.countryLabel ?? "Country",
      options: countryOptions.map((option) => ({
        ...option,
        selected: option.value === formValues?.countryCode,
      })),
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: countryOptions.find(
        (option) => option.value === formValues?.countryCode
      )?.value,
    },
    billingState: {
      type: MlFormFieldType.SELECT,
      placeholder: formLabels?.statePlaceholder ?? "State",
      label: formLabels?.stateLabel ?? "State",
      options: stateOptions.map((option) => ({
        ...option,
        selected: option.value === formValues?.stateCode,
      })),
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: stateOptions.find(
        (option) => option.value === formValues?.stateCode
      )?.value,
    },
    billingCity: {
      type: MlFormFieldType.SELECT,
      placeholder: formLabels?.cityPlaceholder ?? "City",
      label: formLabels?.cityLabel ?? "City",
      options: cityOptions.map((option) => ({
        ...option,
        selected: option.value === formValues?.city,
      })),
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: cityOptions.find((option) => option.value === formValues?.city)
        ?.value,
    },
    billingZipCode: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.zipCodePlaceholder ?? "Zip Code",
      label: formLabels?.zipCodeLabel ?? "Zip Code",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.postalCode,
    },
    billingPhoneNumber: {
      type: MlFormFieldType.PHONE,
      placeholder: formLabels?.phoneNumberPlaceholder ?? "Phone Number",
      label: formLabels?.phoneNumberLabel ?? "Phone Number",
      validator: phoneNumberValidator,
      errorText: "Please, try with a valid phone number",
      columnClass: "col-span-2 md:col-span-1",
      required: false,
      maxLength: 17,
      value: formValues?.phone,
    },
  };
};

export const getShippingFormFields = (
  setShowBillingForm: (value: SetStateAction<boolean>) => void,
  formLabels?: ShippingInfoFormFields,
  formValues?: Address,
  shippingSameAsBilling?: boolean
): OrderShippingAddressFormFields => {
  return {
    shippingTitle: {
      type: MlFormFieldType.TITLE,
      label: formLabels?.shippingTitle ?? "Shipping Address",
      columnClass: "col-span-2",
      className: "pt-2 md:pt-3 mt-1 md:mt-3",
    },
    shippingFirstName: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.firstNamePlaceholder ?? "First Name",
      label: formLabels?.firstNameLabel ?? "First Name",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.firstName,
    },
    shippingLastName: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.lastNamePlaceholder ?? "Last Name",
      label: formLabels?.lastNameLabel ?? "Last Name",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.lastName,
    },
    shippingAddress: {
      type: MlFormFieldType.SEARCH,
      placeholder: formLabels?.addressPlaceholder ?? "Search",
      label: formLabels?.addressLabel ?? "Address",
      columnClass: "col-span-2",
      required: true,
      value: formValues?.streetName,
    },
    shippingStreetNumber: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.streetNumberPlaceholder ?? "Number",
      label: formLabels?.streetNumberLabel ?? "Number",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.streetNumber,
    },
    shippingAdditionalInfo: {
      type: MlFormFieldType.INPUT,
      placeholder:
        formLabels?.addressAditionalInfoPlaceholder ??
        "Address Aditional Information",
      label:
        formLabels?.addressAditionalInfoLabel ??
        "Address Aditional Information",
      columnClass: "col-span-2 md:col-span-1",
      value: formValues?.additionalInfo,
    },
    shippingCountry: {
      type: MlFormFieldType.SELECT,
      placeholder: formLabels?.countryPlaceholder ?? "Country",
      label: formLabels?.countryLabel ?? "Country",
      options: countryOptions.map((option) => ({
        ...option,
        selected: option.value === formValues?.countryCode,
      })),
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: countryOptions.find(
        (option) => option.value === formValues?.countryCode
      )?.value,
    },
    shippingState: {
      type: MlFormFieldType.SELECT,
      placeholder: formLabels?.statePlaceholder ?? "State",
      label: formLabels?.stateLabel ?? "State",
      options: stateOptions.map((option) => ({
        ...option,
        selected: option.value === formValues?.stateCode,
      })),
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: stateOptions.find(
        (option) => option.value === formValues?.stateCode
      )?.value,
    },
    shippingCity: {
      type: MlFormFieldType.SELECT,
      placeholder: formLabels?.cityPlaceholder ?? "City",
      label: formLabels?.cityLabel ?? "City",
      options: cityOptions.map((option) => ({
        ...option,
        selected: option.value === formValues?.city,
      })),
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: cityOptions.find((option) => option.value === formValues?.city)
        ?.value,
    },
    shippingZipCode: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.zipCodePlaceholder ?? "Zip Code",
      label: formLabels?.zipCodeLabel ?? "Zip Code",
      columnClass: "col-span-2 md:col-span-1",
      required: true,
      value: formValues?.postalCode,
    },
    shippingPhoneNumber: {
      type: MlFormFieldType.PHONE,
      placeholder: formLabels?.phoneNumberPlaceholder ?? "Phone Number",
      label: formLabels?.phoneNumberLabel ?? "Phone Number",
      validator: phoneNumberValidator,
      errorText: "Please, try with a valid phone number",
      columnClass: "col-span-2 md:col-span-1",
      required: false,
      maxLength: 17,
      value: formValues?.phone,
    },
    useAsBilling: {
      type: MlFormFieldType.CHECKBOX,
      label: formLabels?.useAsBillingLabel ?? "Use this as my billing address",
      columnClass: "sm:col-span-2",
      onClick: setShowBillingForm,
      defaultValue: !!shippingSameAsBilling,
      checked: !!shippingSameAsBilling,
    },
  };
};

export const getContactFormFields = (
  formLabels?: ShippingInfoFormFields,
  email?: string
): OrderContactInformationFormFields => {
  return {
    contactInformationTitle: {
      type: MlFormFieldType.TITLE,
      label: formLabels?.contactTitle ?? "Contact Information",
      columnClass: "col-span-2",
    },
    email: {
      type: MlFormFieldType.INPUT,
      placeholder: formLabels?.emailPlaceholder ?? "Email",
      label: formLabels?.emailLabel ?? "Email",
      required: true,
      validator: emailValidator,
      columnClass: "col-span-2",
      errorText: "Please, try with a valid email",
      value: email,
    },
  };
};

export const getDeliveryMethodsFormFields = ({
  shippingMethods,
  loading = false,
  skeletonCardCount = 3,
  handleMethodSelection,
}: {
  shippingMethods?: ShippingMethod[];
  loading?: boolean;
  handleMethodSelection?: (index: any) => void;
  skeletonCardCount?: number;
}): DeliveryMethodsFormFields => {
  const shippingMethodFields = {} as any;

  if (shippingMethods) {
    shippingMethods.forEach((shippingMethod: ShippingMethod, index) => {
      const currentKey = `method${index + 1}`;
      shippingMethodFields[currentKey] = {
        type: "radiocard",
        title: shippingMethod.name,
        label: shippingMethod.price.formatted,
        description: `${shippingMethod.price.currency} ${shippingMethod.price.formatted}`,
        columnClass: "col-span-2",
        id: shippingMethod.id,
        checked: false,
        inputName: "shipping-methods-radio",
        handleChange: () => {
          handleMethodSelection?.(index);
        },
      };
    });
  }

  const skeletonMethodFields = Object.fromEntries(
    Array.from({ length: skeletonCardCount }, (_, idx) => [
      `method${idx}`,
      { type: "radiocard-skeleton", checked: false, columnClass: "col-span-2" },
    ])
  );

  const result = loading ? skeletonMethodFields : shippingMethodFields;

  return {
    deliveryMethodsTitle: {
      type: "title",
      label: "Delivery Method",
      columnClass: "col-span-2",
    },
    subtitle: {
      type: "text",
      label: "Your order arrives on:",
      columnClass: "col-span-2",
    },
    ...result,
  };
};
