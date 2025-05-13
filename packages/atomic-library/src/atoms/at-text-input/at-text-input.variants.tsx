import { cva } from "class-variance-authority";

const inputWrapperBaseClass =
  "border relative w-full rounded-lg h-fit transition-colors";

export const inputWrapperClasses = cva(inputWrapperBaseClass, {
  variants: {
    disabled: {
      true: "bg-neutral-50 pointer-events-none",
      false: "bg-surface-primary",
    },
    error: {
      true: "border-feedback-error",
      false: "",
    },
    active: {
      true: "border-cta-primary",
      false: "border-cta-secondary hover:border-cta-primary",
    },
    smallOnMobile: {
      true: "h-10 md:h-12",
      false: "h-12",
    },
  },
  defaultVariants: {
    disabled: false,
    error: false,
    active: false,
    smallOnMobile: false,
  },
});

const inputBaseClass =
  "px-3 h-12 w-full rounded-lg text-primary placeholder:text-tertiary placeholder:text-base placeholder:leading-4 bg-white";

export const inputClasses = cva(inputBaseClass, {
  variants: {
    hidePlaceholderOnFocus: {
      true: "placeholder:opacity-100 focus:placeholder:opacity-0",
      false: "",
    },
  },
});

export const inputPaddingClasses = cva("", {
  variants: {
    state: {
      twoIcons: "pr-16",
      oneIcon: "pr-10",
      default: "",
    },
  },
});

const passwordButtonBaseClass = "cursor-pointer relative z-10";

export const passwordButtonClasses = cva(passwordButtonBaseClass, {
  variants: {
    showIcon: {
      true: "mx-3",
      false: "",
    },
  },
  defaultVariants: {
    showIcon: false,
  },
});
