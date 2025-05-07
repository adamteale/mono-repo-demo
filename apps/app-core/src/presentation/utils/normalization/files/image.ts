import { AtImageProps } from "@mono-repo-demo/atomic-library";
import { Image } from "../../../../types";
import { PLACEHOLDER_IMAGE_PATH } from "./constants";

export const normalizeBackendImage = (file?: Image): AtImageProps => {
  return {
    alt: file?.alt,
    src: file?.src ?? PLACEHOLDER_IMAGE_PATH,
    onErrorSrc: PLACEHOLDER_IMAGE_PATH,
  };
};
