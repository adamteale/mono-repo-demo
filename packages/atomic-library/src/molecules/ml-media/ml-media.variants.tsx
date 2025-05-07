import { cva } from "class-variance-authority";
import { MlMediaFit } from "./ml-media.types";

const backgroundImageBaseClass = "w-full h-full bg-no-repeat bg-center";

export const backgroundImageClasses = cva(backgroundImageBaseClass, {
  variants: {
    fit: {
      [MlMediaFit.CONTAIN]: "bg-contain",
      [MlMediaFit.COVER]: "bg-cover",
    },
  },
});

const imageBaseClass = "w-full h-full";

export const imageClasses = cva(imageBaseClass, {
  variants: {
    fit: {
      [MlMediaFit.CONTAIN]: "object-contain",
      [MlMediaFit.COVER]: "object-cover",
    },
  },
});
