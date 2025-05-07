import { cva } from "class-variance-authority";

const arrowBaseClass =
  "absolute z-20 transform transition-opacity ease-in-out delay-150";
export const arrowClasses = cva(arrowBaseClass, {
  variants: {
    showArrows: {
      true: "opacity-100",
      false: "opacity-0",
    },
    position: {
      left: "justify-self-start xl:left-9",
      right: "justify-self-end xl:right-9",
    },
  },
  defaultVariants: { showArrows: false, position: "right" },
});
