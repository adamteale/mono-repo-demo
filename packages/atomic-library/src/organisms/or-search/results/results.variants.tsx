import { cva } from "class-variance-authority";
import { SearchItemDisplayVariants } from "./results.types";

const itemsContainerBaseClass = "flex flex-col w-full";

export const itemsContainerClasses = cva(itemsContainerBaseClass, {
  variants: {
    displayVariant: {
      [SearchItemDisplayVariants.CARD]: "gap-y-4",
      [SearchItemDisplayVariants.TEXT]: "",
    },
  },
});
