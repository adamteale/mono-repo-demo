import { cva } from "class-variance-authority";

const baseClass =
  "text-neutral-400 w-14 h-14 rounded-lg flex items-center justify-center text-center font-bold text-base leading-4 select-none transition-all";

export const paginationClasses = cva(baseClass, {
  variants: {
    disabled: {
      true: "bg-neutral-50 cursor-default",
      false:
        "bg-transparent hover:bg-neutral-50 ring-original-400 focus-within:ring-[0.0313rem] hover:cursor-pointer hover:text-primary focus-within:text-primary",
    },
    selected: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    { disabled: false, selected: true, className: "text-primary" },
  ],
  defaultVariants: {
    disabled: false,
    selected: false,
  },
});
