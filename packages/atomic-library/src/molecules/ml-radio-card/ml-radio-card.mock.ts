import { MlRadioCardProps } from "./ml-radio-card.types";

export const defaultProps: MlRadioCardProps = {
  label: "Free",
  radioProps: {
    checked: false,
    disabled: false,
    onChange: () => {},
    dataTestId: "at-radio",
  },
};

export const checkedProps: MlRadioCardProps = {
  label: "Free",
  radioProps: {
    checked: true,
    disabled: false,
    onChange: () => {},
    dataTestId: "at-radio",
  },
};

export const disabledProps: MlRadioCardProps = {
  label: "Free",
  radioProps: {
    checked: false,
    disabled: true,
    onChange: () => {},
    dataTestId: "at-radio",
  },
};
