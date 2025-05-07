import { cva } from "class-variance-authority";

const containerBaseClass =
  "flex max-w-[37.375rem] items-start justify-between px-4 py-6 bg-white rounded-lg border";

export const containerClasses = cva(containerBaseClass, {
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "hover:cursor-pointer",
    },
    checked: {
      true: "border-secondary",
      false: "border-white",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      checked: false,
      className: "hover:border-stone-200",
    },
  ],
  defaultVariants: {
    disabled: false,
    checked: false,
  },
});

const labelBaseClass = "font-bold text-sm text-primary";

export const labelClasses = cva(labelBaseClass, {
  variants: {
    disabled: {
      true: "opacity-50",
      false: "",
    },
  },
  defaultVariants: { disabled: false },
});
