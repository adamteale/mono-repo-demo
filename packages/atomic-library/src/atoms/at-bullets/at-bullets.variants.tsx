import { cva } from "class-variance-authority";

const baseClass = "rounded-full ring-1 ring-icon-active p-2 transition-colors";

export const bulletVariants = cva(baseClass, {
  variants: {
    active: {
      true: "bg-icon-active",
      false: "",
    },
  },
  defaultVariants: {
    active: false,
  },
});
