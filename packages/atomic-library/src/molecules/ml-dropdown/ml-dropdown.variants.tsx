import { cva } from "class-variance-authority";

export const dropdownContainerClass = cva("", {
  variants: {
    background: {
      true: "bg-surface-primary",
      false: "",
    },
  },
  defaultVariants: { background: true },
});

const summaryBaseClass =
  "flex justify-between list-none items-center text-base md:text-lg text-primary tracking-[0.4px] cursor-pointer";
export const summaryClasses = cva(summaryBaseClass, {
  variants: {
    desktopFilter: {
      true: "py-4 px-4",
      false: "py-6",
    },
    openDefinitive: {
      true: "leading-4 font-medium",
      false: "font-normal leading-5 md:leading-6",
    },
  },
  defaultVariants: { desktopFilter: false, openDefinitive: false },
});

const dropdowContentBaseClass =
  "bg-surface-primary text-primary text-base leading-5";
export const dropdownContentClasses = cva(dropdowContentBaseClass, {
  variants: {
    desktopFilter: {
      true: "p-4",
      false: "py-6",
    },
    openDefinitive: {
      true: "",
      false: "hidden",
    },
  },
  defaultVariants: { desktopFilter: false, openDefinitive: false },
});
