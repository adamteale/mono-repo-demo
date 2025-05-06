import React from "react";
import { OrCarousel, OrCarouselBanner } from "@mono-repo-demo/atomic-library";
import { OrCarouselRendererProps } from "../renderer.types";
import { useNormalizeCarousel } from "../../normalization/carousel";
import { normalizeCarouselBanner } from "../../normalization/carousel-banner";
import { CMSCarousel } from "@mono-repo-demo/atomic-library";

export const OrCarouselRenderer = ({
  block,
  className = "",
}: OrCarouselRendererProps) => {
  const normCarousel = useNormalizeCarousel(block);
  if (block.layout === "banner") {
    const bannerProps = normalizeCarouselBanner(block as CMSCarousel);
    return <OrCarouselBanner {...bannerProps} className={className} />;
  }
  return (
    <OrCarousel
      {...normCarousel}
      className={`${normCarousel.className} container pr-0`}
      titleContainerClassName="container"
      wrapperClassName={`${className}`}
    />
  );
};

export default OrCarouselRenderer;
