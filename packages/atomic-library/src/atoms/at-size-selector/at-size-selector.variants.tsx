import { cva } from "class-variance-authority";

const baseClass =
  "relative w-16 min-w-min h-12 py-3 px-2 text-base border rounded-sm whitespace-nowrap transition-colors";

export const sizeSelector = cva(baseClass, {
  variants: {
    state: {
      available: "hover:border-cta-primary text-primary",
      soldOut:
        "bg-neutral-100 text-cta-content-disabled hover:border-cta-primary",
    },
    isSelected: {
      true: "border-cta-primary",
      false: "",
    },
  },
  compoundVariants: [
    { isSelected: false, state: "soldOut", className: "border-cta-disabled" },
  ],
  defaultVariants: {
    state: "available",
    isSelected: false,
  },
});
