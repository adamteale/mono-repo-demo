import { MlMediaProps } from "@mono-repo-demo/atomic-library";
import { PLACEHOLDER_IMAGE_PATH } from "../../utils/normalization/files/constants";
import { CMSMedia } from "@mono-repo-demo/atomic-library";

export const normalizeMedia = (media?: CMSMedia): MlMediaProps => {
  if (!media || !media.imageDesktop) {
    return {
      imageDesktop: {
        src: PLACEHOLDER_IMAGE_PATH,
        alt: "Image not available.",
        onErrorSrc: PLACEHOLDER_IMAGE_PATH,
      },
    };
  }

  const { imageDesktop, imageTablet, imageMobile } = media;

  const tabletImg = imageTablet
    ? { src: imageTablet?.file.url, alt: imageTablet?.title }
    : undefined;
  const mobileImg = imageMobile
    ? { src: imageMobile?.file.url, alt: imageMobile?.title }
    : undefined;

  return {
    imageDesktop: {
      src: imageDesktop?.file?.url ?? "",
      alt: imageDesktop.title ?? "",
    },
    imageTablet: tabletImg,
    imageMobile: mobileImg,
  };
};
