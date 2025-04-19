import { AtButtonVariant } from "../atoms";

type ButtonVariantStyles<T> = Record<AtButtonVariant, T>;
type VariantOrDefault<T> = Partial<Record<AtButtonVariant, T>> & { default: T };

export interface ThemeType {
  colors: {
    button: ButtonVariantStyles<{
      background: string;
      text: string;
      border: string;
    }>;
    white: string;
    primaryBlue: string;
    ctaOrange: string;
  };
  // Use VariantOrDefault helper type
  buttonBorderWidths: VariantOrDefault<number>;
  buttonRadii: VariantOrDefault<number>;
  fontSizes: {
    button: number;
  };
  fontWeights: {
    bold: string; // Or 'bold' | 'normal' | number
  };
}

export const theme: ThemeType = {
  colors: {
    button: {
      [AtButtonVariant.primary]: {
        background: "#24386E",
        text: "#FFFFFF",
        border: "#FFFFFF",
      },
      [AtButtonVariant.secondary]: {
        background: "#FFFFFF",
        text: "#24386E",
        border: "#24386E",
      },
      [AtButtonVariant.cta]: {
        background: "#EE4124",
        text: "#FFFFFF",
        border: "#EE4124",
      },
    },
    white: "#FFFFFF",
    primaryBlue: "#24386E",
    ctaOrange: "#EE4124",
  },
  buttonBorderWidths: {
    [AtButtonVariant.primary]: 2,
    default: 0,
  },
  buttonRadii: {
    [AtButtonVariant.cta]: 8,
    default: 0,
  },
  fontSizes: {
    button: 20,
  },
  fontWeights: {
    bold: "bold",
  },
};
