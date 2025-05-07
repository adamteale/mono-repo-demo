import { cva } from "class-variance-authority";
import {
  OrContentStripBackgroundColor,
  OrContentStripLayoutType,
  OrContentStripTextAlignment,
} from "./or-content-strip.types";

const sectionBaseClass =
  "flex h-full items-center xl:justify-center xl:max-h-[47.375rem]";
export const sectionClasses = cva(sectionBaseClass, {
  variants: {
    backgroundColor: {
      [OrContentStripBackgroundColor.PRIMARY]: "bg-surface-primary",
      [OrContentStripBackgroundColor.SECONDARY]: "bg-surface-secondary",
    },
  },
  defaultVariants: {
    backgroundColor: OrContentStripBackgroundColor.PRIMARY,
  },
});

export const containerClasses = cva("flex flex-col items-center", {
  variants: {
    layoutType: {
      [OrContentStripLayoutType.FLUID]: "w-full",
      [OrContentStripLayoutType.CONTAINED]: "w-full xl:w-[90rem]",
    },
    align: {
      [OrContentStripTextAlignment.LEFT]: "xl:flex-row-reverse",
      [OrContentStripTextAlignment.RIGHT]: "xl:flex-row",
    },
  },
  defaultVariants: {
    align: OrContentStripTextAlignment.RIGHT,
    layoutType: OrContentStripLayoutType.FLUID,
  },
});

const contentBaseClass = "flex flex-col w-fit break-all";
export const contentClasses = cva(contentBaseClass, {
  variants: {
    hasTitleOrSubtitleOrParagraph: {
      true: "",
      false: "",
    },
    hasItems: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      hasTitleOrSubtitleOrParagraph: true,
      hasItems: true,
      class: "gap-y-10 xl:gap-y-16",
    },
  ],
  defaultVariants: {
    hasTitleOrSubtitleOrParagraph: false,
    hasItems: false,
  },
});

const linkBaseClass = "";
export const linkClasses = cva(linkBaseClass, {
  variants: {
    hasTitleOrSubtitleOrParagraph: {
      true: "",
      false: "",
    },
    hasItems: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      hasTitleOrSubtitleOrParagraph: false,
      hasItems: true,
      class: "mt-10 xl:mt-16",
    },
    {
      hasTitleOrSubtitleOrParagraph: true,
      hasItems: false,
      class: "mt-10 xl:mt-16",
    },
    {
      hasTitleOrSubtitleOrParagraph: false,
      hasItems: false,
      class: "mt-0",
    },
    {
      hasTitleOrSubtitleOrParagraph: true,
      hasItems: true,
      class: "mt-0",
    },
  ],
  defaultVariants: {
    hasTitleOrSubtitleOrParagraph: false,
    hasItems: false,
  },
});
