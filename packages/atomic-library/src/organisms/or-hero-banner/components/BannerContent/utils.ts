import { AtLinkProps } from "../../../../atoms";
import {
  OrHeroBannerContentAlignment,
  OrHeroBannerContentAlignmentMobile,
  OrHeroBannerVariant,
} from "../../or-hero-banner.types";

export const getContainerClassnames = (
  variant: OrHeroBannerVariant,
  align: OrHeroBannerContentAlignment
) => {
  const baseClasses = "flex relative md:justify-start";

  if (variant !== OrHeroBannerVariant.IMAGE_BANNER) {
    const alignmentClass =
      align === OrHeroBannerContentAlignment.LEFT ? "xl:ml-auto" : "xl:mr-auto";
    return `${baseClasses} items-center ${alignmentClass} px-6 py-12 sm:px-8 md:p-16 xl:px-32 xl:py-[6.25rem] text-primary xl:w-1/2`;
  }

  const paddingClasses = "p-6 sm:p-8 md:p-16 lg:py-6 xl:px-32";

  if (align === OrHeroBannerContentAlignment.RIGHT)
    return `${baseClasses} items-end w-full flex-col ${paddingClasses} text-secondary h-[41.75rem] md:h-[47.375rem]`;

  if (align === OrHeroBannerContentAlignment.CENTER)
    return `${baseClasses} items-center w-full flex-row ${paddingClasses} justify-center md:justify-center text-secondary h-[41.75rem] md:h-[47.375rem]`;

  return `${baseClasses} items-center w-full ${paddingClasses} justify-center text-secondary h-[41.75rem] md:h-[47.375rem]`;
};

export const getContentClassnames = (
  variant: OrHeroBannerVariant,
  align: OrHeroBannerContentAlignment,
  showTextBackground: boolean,
  buttons: AtLinkProps[],
  mobileAlign?: OrHeroBannerContentAlignmentMobile
) => {
  const backgroundClasses =
    "p-6 rounded-lg bg-neutral-700 bg-opacity-40 max-md:w-full md:max-w-[20rem] lg:max-w-[27.875rem] xl:max-w-[32rem] 2xl:max-w-[39.375rem] 3xl:max-w-[52rem]";
  const baseClasses = `flex flex-col my-auto`;
  const buttonSpacing =
    Array.isArray(buttons) && buttons.length > 0 ? "gap-8 md:gap-12" : "";
  const mobileAlignClasses =
    mobileAlign === OrHeroBannerContentAlignmentMobile.TOP
      ? "mt-[4.375rem] md:my-auto"
      : "";

  if (variant !== OrHeroBannerVariant.IMAGE_BANNER)
    return `${baseClasses} ${buttonSpacing} w-full md:text-left`;

  // Guard clauses for 'image banner' variant
  if (align === OrHeroBannerContentAlignment.CENTER)
    return `${baseClasses} ${mobileAlignClasses} text-center gap-6 md:text-center items-center 
  
    ${
      variant === OrHeroBannerVariant.IMAGE_BANNER && showTextBackground
        ? backgroundClasses
        : "lg:max-w-[37rem] xl:max-w-[61rem] 2xl:max-w-[68rem]"
    }`;

  if (align === OrHeroBannerContentAlignment.RIGHT)
    return `${baseClasses} ${mobileAlignClasses} text-center gap-6 max-md:items-center md:text-left w-full md:w-[20rem] lg:w-[27.875rem] xl:w-[32rem] 2xl:w-[39.375rem] 3xl:w-[52rem] ${
      variant === OrHeroBannerVariant.IMAGE_BANNER && showTextBackground
        ? backgroundClasses
        : ""
    }`;

  // Default case for 'image banner' when align is not 'center'
  return `${baseClasses} ${mobileAlignClasses} text-center gap-6 max-md:items-center md:text-left ${
    variant === OrHeroBannerVariant.IMAGE_BANNER && showTextBackground
      ? backgroundClasses
      : "md:max-w-[24rem] lg:max-w-[37rem] xl:max-w-[42rem] 2xl:max-w-[59rem]"
  }`;
};
