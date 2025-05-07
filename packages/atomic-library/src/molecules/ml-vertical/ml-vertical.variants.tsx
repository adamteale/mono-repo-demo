import { cva } from "class-variance-authority";
import { MlVerticalAlign } from "./ml-vertical.types";

const containerBaseClass = "flex gap-8 flex-col";

export const containerClasses = cva(containerBaseClass, {
  variants: {
    align: {
      [MlVerticalAlign.START]: "items-start text-start",
      [MlVerticalAlign.CENTER]: "items-center text-center",
    },
  },
  defaultVariants: { align: MlVerticalAlign.START },
});
