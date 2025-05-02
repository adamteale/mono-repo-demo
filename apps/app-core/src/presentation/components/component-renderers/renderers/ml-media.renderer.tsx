import React from "react";

// import { MlMedia } from '@mono-repo-demo/atomic-library'
import { MlMediaRendererProps } from "../renderer.types";
import { normalizeFile } from "../../normalization/file";
import { MlMedia } from "@mono-repo-demo/atomic-library";

export const MlMediaRenderer = ({ block }: MlMediaRendererProps) => {
  const { imageDesktop, imageTablet, imageMobile } = block;
  const desktop = normalizeFile(imageDesktop);
  const tablet = normalizeFile(imageTablet);
  const mobile = normalizeFile(imageMobile);

  return (
    <MlMedia imageDesktop={desktop} imageTablet={tablet} imageMobile={mobile} />
  );
};
