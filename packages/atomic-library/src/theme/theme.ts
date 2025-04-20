import { AtButtonVariant } from "../atoms";

type ButtonVariantStyles<T> = Record<AtButtonVariant, T>;
type VariantOrDefault<T> = Partial<Record<AtButtonVariant, T>> & { default: T };

export interface ThemeType {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    desktop: string;
  };
  colors: {
    button: ButtonVariantStyles<{
      background: string;
      text: string;
      border: string;
    }>;
    white: string;
    primaryBlue: string;
    ctaOrange: string;
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
  // Use VariantOrDefault helper type
  buttonBorderWidths: VariantOrDefault<string | number>;
  buttonRadii: VariantOrDefault<number>;
  fontFamily: string;
  fontSizes: {
    button: number | string;
    h3: number | string;
    body: number | string;
  };
  fontWeights: {
    bold: string; // Or 'bold' | 'normal' | number
  };
  radii: {
    sharp: number;
    rounded: number;
    circle: number;
  };
  spacing: {
    sm: number;
    md: number;
  };
}

export const theme: ThemeType = {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    desktop: "1000px",
  },
  colors: {
    background: {
      primary: "#182958",
      secondary: "#f0f5fe",
      tertiary: "#2B3859",
    },
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
    text: {
      primary: "#182958",
      secondary: "#FFFFFF",
    },
    white: "#FFFFFF",
    primaryBlue: "#24386E",
    ctaOrange: "#EE4124",
  },
  buttonBorderWidths: {
    [AtButtonVariant.primary]: "2px",
    default: 0,
  },
  buttonRadii: {
    [AtButtonVariant.cta]: 8,
    default: 0,
  },
  fontFamily: "Arial",
  fontSizes: {
    button: "20px",
    h3: 28,
    body: 20,
  },
  fontWeights: {
    bold: "bold",
  },
  radii: {
    sharp: 0,
    rounded: 4,
    circle: 10000,
  },
  spacing: {
    sm: 8,
    md: 20,
  },
};
