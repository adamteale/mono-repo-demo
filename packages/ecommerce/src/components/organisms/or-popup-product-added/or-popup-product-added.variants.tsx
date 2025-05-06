import { cva } from "class-variance-authority";
import { colorMappingClasses } from "@mono-repo-demo/atomic-library";

const colorDotBaseClass = "inline-block rounded-full w-2.5 h-2.5";
export const colorDotClasses = cva(colorDotBaseClass, {
  variants: {
    colorKey: {
      ...colorMappingClasses,
      white: `${colorMappingClasses.white} ring-1 ring-stroke-secondary`,
      default: "",
    },
  },
  defaultVariants: { colorKey: "default" },
});
