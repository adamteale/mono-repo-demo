import { cva } from "class-variance-authority";

//ITEMS
const itemsContainerBaseClass = "text-primary uppercase flex flex-col gap-y-5";
export const itemsContainerClasses = cva(itemsContainerBaseClass, {
  variants: {
    open: {
      true: "",
      false: "hidden",
    },
  },
  defaultVariants: { open: false },
});

const itemListBaseclass = "flex flex-col";
export const itemListClasses = cva(itemListBaseclass, {
  variants: {
    hasChildren: {
      true: "gap-y-4",
      false: "",
    },
  },
  defaultVariants: { hasChildren: false },
});
