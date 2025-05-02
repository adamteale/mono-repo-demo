import {
  // MlDropDownMenuItemProps,
  // MlMenuItemProps,
  OrFooterProps,
} from "@mono-repo-demo/atomic-library";
// import { normalizeFile } from "./file";
// import Link from "next/link";
import { CMSFooter } from "@mono-repo-demo/atomic-library";

export const normalizeFooter = (
  footer: CMSFooter | undefined
): OrFooterProps | undefined => {
  return undefined;
  // if (!footer) return undefined;

  // const menuItems: MlDropDownMenuItemProps[] = footer.menuItems
  //   ?.map((item) => {
  //     if (!item?.titleLabel) return null;
  //     const menuItemProps: MlDropDownMenuItemProps = {
  //       label: item?.titleLabel,
  //       items: item?.children
  //         .map<MlMenuItemProps | undefined>((child) => {
  //           if (child.label && child.actionUrl)
  //             return {
  //               label: child.label,
  //               linkProps: {
  //                 href: `${child?.actionUrl}`,
  //                 linkWrapper: Link,
  //               },
  //               isOpen: false,
  //             };
  //         })
  //         .filter((item): item is MlMenuItemProps => !!item),
  //     };
  //     return menuItemProps;
  //   })
  //   .filter(Boolean) as MlDropDownMenuItemProps[];

  // const newsletterButtonHandler = () => {
  //   // !TODO add newsletter submit functionality here
  // };

  // return {
  //   description: footer.description ?? "",
  //   copyright: footer.copyright ?? "",
  //   newsLetter: {
  //     title: footer.newsletter?.title,
  //     description: footer.newsletter?.description,
  //     inputText: footer.newsletter?.inputText,
  //     buttonText: footer.newsletter?.buttonText,
  //     submitHandler: newsletterButtonHandler,
  //   },
  //   menuItems,
  //   brand: {
  //     image: {
  //       imageDesktop: normalizeFile(footer.brandImage?.imageDesktop),
  //       imageTablet: footer.brandImage?.imageTablet
  //         ? normalizeFile(footer.brandImage?.imageTablet)
  //         : undefined,
  //       imageMobile: footer.brandImage?.imageMobile
  //         ? normalizeFile(footer.brandImage?.imageMobile)
  //         : undefined,
  //     },
  //     link: { href: `${footer.brandUrl}`, linkWrapper: Link },
  //   },
  // };
};
