import { cva } from "class-variance-authority";
import { classes } from "../../utils/cva";

const base = {
  base: "text-base text-link transition-colors flex items-center",
  hover: "hover:text-link-hover",
  active: "active:font-medium active:text-link-pressed",
};

export const linkVariant = cva("", {
  variants: {
    variant: {
      default: classes(base),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
