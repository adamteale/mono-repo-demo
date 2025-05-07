import { cva } from "class-variance-authority";

const baseClass = `
  focus:outline-none
  cursor-pointer
  bg-cta-fill-tertiary
  rounded-full
  shadow-md
  transition-shadow hover:shadow-md active:shadow-lg
`;

export const controlArrow = cva(baseClass, {
  variants: {
    size: {
      big: "p-7",
      medium: "p-3",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
