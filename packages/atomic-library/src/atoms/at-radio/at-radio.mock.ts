import { AtRadioProps } from "./at-radio.types";

export const defaultProps: AtRadioProps = {
  onChange: () => {},
  className: "",
  checked: true,
  disabled: false,
  dataTestId: "at-radio",
};

export const mockTitle = {
  title: "Test Radio Title",
};

export const mockDescription = {
  description: "Test Radio Description",
};
