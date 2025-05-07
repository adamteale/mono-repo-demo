import { AtButtonSize } from "./at-button.types";
import { cva } from "class-variance-authority";

export const buttonVariants = (size?: AtButtonSize, isLoading?: boolean) => {
  const baseStyle = `w-full pl-6 pr-6 pt-4 pb-4 tracking-0.125 font-bold flex items-center justify-center leading-4 transition-colors`;

  let sizeClass = "";
  let disabledClass = isLoading ? "opacity-50 cursor-not-allowed" : "";

  switch (size) {
    case AtButtonSize.SMALL:
      sizeClass = "h-12 text-sm";
      break;
    case AtButtonSize.LARGE:
      sizeClass = "h-14 text-base";
      break;
    default:
      sizeClass = "h-14 md:h-14 text-sm md:text-base";
  }

  return cva(`${baseStyle} ${sizeClass}`, {
    variants: {
      variant: {
        primary: `bg-[#D01D1D] text-white hover:bg-[#B91C1B] active:bg-red-700 disabled:opacity-50`,
        secondary: `bg-[#23376D] text-white hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 border-1 border-white`,
        tertiary: `text-black hover:underline hover:decoration-2 hover:underline-offset-4 hover:decoration-black disabled:opacity-50 active:opacity-80`,
        quartenary: `bg-cta-fill-tertiary text-cta-content-secondary hover:bg-neutral-50 hover:text-cta-content-secondary disabled:opacity-50 active:bg-neutral-100 active:text-cta-content-secondary`,
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  });
};
