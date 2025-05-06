import { AtImageProps } from "@mono-repo-demo/atomic-library";
import { PLACEHOLDER_IMAGE_PATH } from "../../utils/normalization/files/constants";
import { CMSImage } from "@mono-repo-demo/atomic-library";

export const normalizeFile = (file?: CMSImage): AtImageProps => {
  return {
    alt: file?.title,
    src: file?.file?.url ?? PLACEHOLDER_IMAGE_PATH,
    onErrorSrc: PLACEHOLDER_IMAGE_PATH,
  };
};
