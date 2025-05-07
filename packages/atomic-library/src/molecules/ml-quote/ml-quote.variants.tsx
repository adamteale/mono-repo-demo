import { cva } from "class-variance-authority";

const authorNameBaseClass =
  "font-bold text-primary text-base leading-4 md:tracking-0.1 md:text-lg md:leading-5";

export const authorNameClasses = cva(authorNameBaseClass, {
  variants: {
    hasImage: {
      true: "text-start",
      false: "",
    },
  },
  defaultVariants: { hasImage: false },
});

const authorRoleBaseClass =
  "text-tertiary text-sm leading-4 md:text-base md:leading-5";

export const authorRoleClasses = cva(authorRoleBaseClass, {
  variants: {
    hasImage: {
      true: "text-start",
      false: "",
    },
  },
  defaultVariants: { hasImage: false },
});
