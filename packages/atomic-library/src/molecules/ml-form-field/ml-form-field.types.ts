import { SelectHTMLAttributes } from "react";
import { AtTextInputProps, IconType } from "../../atoms";
import { WithImages } from "../../types";
import { MlSearchSize, SearchResult } from "../ml-search";

export enum MlFormFieldType {
  INPUT = "input",
  SELECT = "select",
  TEXT_AREA = "textarea",
  CHECKBOX = "checkbox",
  PHONE = "phone",
  PASSWORD = "password",
  SEARCH = "search",
  TITLE = "title",
  LINK = "link",
  RADIO_CARD = "radiocard",
  RADIO_CARD_SKELETON = "radiocard-skeleton",
  TEXT = "text",
}

export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
  selected?: boolean;
}

export interface MlFormFieldProps extends WithImages<"paymentMethodsImages"> {
  /** If true, the checkbox is checked. */
  checked?: boolean;

  /** CSS class for styling the form field. */
  className?: string;

  /** CSS class for column styling. */
  columnClass?: string;

  /** Default value of the form field. */
  defaultValue?: any;

  /** Description text for the field. */
  description?: string;

  /** If true, the field will be disabled. */
  disabled?: boolean;

  /** If true, the field will display an error state. */
  error?: boolean;

  /** Error text displayed when validation fails. */
  errorText?: string;

  /** Name of the field for form submission. */
  fieldName?: string;

  /** Function called when the field value changes. */
  handleChange?: (value: string) => void;

  /** Text displayed below the field to provide guidance or instructions. */
  helpText?: string;

  /** URL for link-type fields. */
  href?: string;

  /** ID of the field. */
  id?: string;

  /** An optional string that specifies the name of an input element. Used to group radio cards together by giving them the same name.  */
  inputName?: string;

  /** Icon displayed inside the text input. */
  insideIcon?: AtTextInputProps["icon"];

  /** If true, the field will be for a credit card number. */
  isCreditCard?: boolean;

  /** If true, the field will be for a CVV number. */
  isCvv?: boolean;

  /** If true, the field will be for an expiration date. */
  isExpirationDate?: boolean;

  /** Label text for the form field. */
  label?: string;

  /** Maximum number of characters allowed in the input. */
  maxLength?: number;

  /** Function called when the clear input button is clicked. */
  onClearInputClick?: () => void;

  /** Function called when the field is clicked. */
  onClick?: (value?: any) => void;

  /** Array of options for select-type fields */
  options?: SelectOption[];

  /** Icon displayed outside the text input. */
  outsideIcon?: IconType;

  /** Placeholder text displayed inside the input field. */
  placeholder?: string;

  /** If true, the field is read-only. */
  readOnly?: boolean;

  /** If true, the field will be mandatory. */
  required?: boolean;

  /** Array of search results, either as strings or `SearchResult` objects. */
  results?: string[] | SearchResult[];

  /** If true, a separator line will be displayed below the field. */
  separator?: boolean;

  /** If true, a success icon is displayed. */
  showSuccessIcon?: boolean;

  /** Specifies the size of the input field (only used for search inputs). Can be 'small' or 'large'. */
  size?: MlSearchSize;

  /** Title text for the field. */
  title?: string;

  /** Specifies the type of form field, such as 'input', 'select', 'textarea', etc. */
  type: MlFormFieldType;

  /** Regular expression or function for validating the field value. */
  validator?: RegExp | ((value: string) => boolean);

  /** Current value of the field. */
  value?: string | number | readonly string[] | boolean | undefined;
}

export interface MlSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** An array of options for the select dropdown. */
  options: SelectOption[];

  /** The data test ID for the select component. */
  dataTestId?: string;

  /** The label for the select component. */
  label?: string;

  /** The help text for the select component. */
  helpText?: string;

  /** Indicates whether there is an error with the select component. */
  error?: boolean;

  /** Placeholder text displayed inside the input field. */
  placeholder?: string;

  /**
   * A callback function that is called when the value of the select component changes.
   * @param value - The selected value.
   */
  handleChange?: (value: string) => void;

  /** If true, the field will be mandatory. */
  required?: boolean;
}
