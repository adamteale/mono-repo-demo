import { cva } from "class-variance-authority";

const radioInputBaseClass =
  "appearance-none relative h-[0.9375rem] min-w-[0.9375rem] m-[0.09375rem] rounded-full !border-[0.046875rem] border-solid";

export const radioInputClasses = cva(radioInputBaseClass, {
  variants: {
    disabled: {
      true: "border-cta-disabled cursor-not-allowed",
      false: "border-primary cursor-pointer",
    },
    checked: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      checked: true,
      className: "bg-radio-enabled",
    },
    {
      disabled: true,
      checked: true,
      className: "bg-radio-disabled",
    },
  ],
  defaultVariants: {
    disabled: false,
    checked: false,
  },
});

const radioContainerBaseClasses = "flex flex-row gap-2 items-start w-fit";

export const radioContainerClasses = cva(radioContainerBaseClasses, {
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const radioTextContainerBaseClasses = "flex flex-col gap-2 text-sm";

export const radioTextContainerClasses = cva(radioTextContainerBaseClasses, {
  variants: {
    disabled: {
      true: "cursor-not-allowed",
      false: "hover:cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const baseTitleClasses = "font-medium";

export const titleClasses = cva(baseTitleClasses, {
  variants: {
    disabled: {
      true: "text-original-400 cursor-not-allowed",
      false: "text-primary hover:cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

const baseDescriptionClasses = "font-normal";

export const descriptionClasses = cva(baseDescriptionClasses, {
  variants: {
    disabled: {
      true: "text-neutral-300 cursor-not-allowed",
      false: "text-quaternary hover:cursor-pointer",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});
