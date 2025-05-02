import { AtButtonVariants } from "@mono-repo-demo/atomic-library";
import { TmShippingInfoProps } from "./tm-shipping-info.types";
import { OrFormManager } from "@components-library/common/src/components/organisms/or-form/use-or-form";

const emailValidator = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const phoneNumberValidator = new RegExp("^\\(\\+\\d{1,3}\\)\\s\\d{10}$");

const fakeManager: OrFormManager = {
  state: { isValid: false, values: {} },
  resetForm: () => {},
  changeFields: () => {},
  clearInput: () => {},
  dispatch: () => {},
};

export const tmShippingInfoProps: TmShippingInfoProps = {
  copyright: "copyright text",
  shippingFormData: {
    formFields: {
      fields: {
        contactInformationTitle: {
          type: "title",
          label: "Contact Information",
          columnClass: "sm:col-span-2",
        },
        email: {
          type: "input",
          placeholder: "Email",
          label: "Email",
          required: true,
          validator: emailValidator,
          columnClass: "sm:col-span-2",
          errorText: "Please, try with a valid email",
        },
        billingTitle: {
          type: "title",
          label: "Billing Address",
          columnClass: "sm:col-span-2",
        },
        billingFirstName: {
          type: "input",
          placeholder: "First Name",
          label: "First Name",
          required: true,
        },
        billingLastName: {
          type: "input",
          placeholder: "Last Name",
          label: "Last Name",
          required: true,
        },
        billingStreetName: {
          type: "input",
          placeholder: "Street Name",
          label: "Street Name",
        },
        billingStreetNumber: {
          type: "input",
          placeholder: "Street Number",
          label: "Street Number",
        },
        billingAdditionalInfo: {
          type: "input",
          placeholder: "Address Aditional Information",
          label: "Address Aditional Information",
          columnClass: "sm:col-span-2",
        },
        billingCountry: {
          type: "select",
          placeholder: "Country",
          label: "Country",
          options: [
            { label: "Country 1", value: "US" },
            { label: "Country 2", value: "US" },
            { label: "Country 3", value: "US" },
          ],
        },
        billingState: {
          type: "select",
          placeholder: "State",
          label: "State",
          options: [
            { label: "State 1", value: "California" },
            { label: "State 2", value: "California" },
            { label: "State 3", value: "California" },
          ],
        },
        billingCity: {
          type: "select",
          placeholder: "City",
          label: "City",
          options: [
            { label: "City 1", value: "California City" },
            { label: "City 2", value: "California City" },
            { label: "City 3", value: "California City" },
          ],
        },
        billingZipCode: {
          type: "input",
          placeholder: "Zip Code",
          label: "Zip Code",
          required: true,
        },
        billingPhoneNumber: {
          type: "phone",
          placeholder: "Phone Number",
          label: "Phone Number",
          validator: phoneNumberValidator,
          errorText: "Please, try with a valid phone number",
        },
        useAsShipping: {
          type: "checkbox",
          label: "Use this as my shipping address",
          columnClass: "sm:col-span-2",
          defaultValue: false,
        },
      },
    },
    submitButton: {
      variant: AtButtonVariants.PRIMARY,
      children: "Send",
      className: "px-32 py-2",
    },
    onSubmitForm: () => {},
    formManager: fakeManager,
  },
  orderSummaryProps: { totalPrice: "10" },
};
