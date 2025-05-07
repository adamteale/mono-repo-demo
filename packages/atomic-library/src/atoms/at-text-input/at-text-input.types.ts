import { InputHTMLAttributes } from "react";
import { IconColor } from "../at-icon";

interface IconTextInput {
  /** The type of the icon. */
  type: "search" | "check" | "plus" | "cvv";

  /** The color of the icon. */
  color?: IconColor;
}

export interface clearButtonOptions {
  className?: string;
  type?: "cancel" | "cancel-circle";
}

export interface AtTextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /** An optional string used for testing purposes to identify the input field. */
  dataTestId?: string;

  /** Indicates whether the input field has an error state. */
  error?: boolean;

  /** An optional string that provides error text below the input field when in an error state. */
  errorText?: string;

  /**
   * An optional function that handles changes to the input value.
   * @param value The new value of the input field.
   */
  handleChange?: (value: string) => void;

  /** An optional function that handles the event when the password visibility toggle is clicked. */
  handlePasswordToggle?: () => void;

  /** An optional string that provides additional help text below the input field. */
  helpText?: string;

  /** A boolean that hides the placeholder text when the input field is focused. */
  hidePlaceholderOnFocus?: boolean;

  /** An optional object that specifies the type and color of an icon to display within the input field. The type can be 'search', 'check', 'plus', or 'cvv', and the color is defined by the `IconColor` type. */
  icon?: IconTextInput;

  /** A boolean that indicates whether the input field is for a credit card number. */
  isCreditCard?: boolean;

  /** A boolean indicating whether the input field is for a <abbr title="Card Verification Value">CVV</abbr> code. */
  isCvv?: boolean;

  /** A boolean that indicates whether the input field is for an expiration date. */
  isExpirationDate?: boolean;

  /** An optional string that provides a label for the input field. */
  label?: string;

  /** An optional function that handles the event when the clear input button is clicked. */
  onClearInputClick?: () => void;

  /** An optional string that specifies the icon type for the password visibility toggle, either 'visibility' or 'visibility-off'. */
  passwordIcon?: "visibility" | "visibility-off";

  /** A boolean that indicates whether the input field is for a password and should have a toggle for visibility. */
  showPassword?: boolean;

  /** A boolean that determines whether to show a button for toggling password visibility */
  showPasswordButton?: boolean;

  /** A boolean that determines whether to show a success icon when the input value is valid. */
  showSuccessIcon?: boolean;

  /** A boolean that reduces the size of the input field on mobile devices. */
  smallOnMobile?: boolean;

  /** A boolean that determines whether to show a button that clears the entered text. */
  showClearButton?: boolean;

  /** A boolean that determines whether to show an error icon when the input is not valid. */
  showErrorIcon?: boolean;

  /** An optional object that specifies options for the clear button within the input field, including the class name for styling and the icon type for the button. */
  clearButtonOptions?: clearButtonOptions;
}
