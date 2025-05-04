import React, { lazy } from "react";

import { View } from "react-native";

import { BlocksRendererProps } from "./renderer.types";
import { MlMediaRenderer } from "./renderers/ml-media.renderer";
import { MlCardRenderer } from "./renderers/ml-card.renderer";
import { MlVerticalRenderer } from "./renderers/ml-vertical.renderer";
import { MlVerticalTeamRenderer } from "./renderers/ml-vertical-team.renderer";
import { MlQuoteRenderer } from "./renderers/ml-quote.renderer";
import { OrContainerRenderer } from "./renderers/or-container.renderer";
import { OrBrandsContainerRenderer } from "./renderers/or-brands-container.renderer";
import { MlBrandRenderer } from "./renderers/ml-brand.renderer";
import { MlVideoPlayerRenderer } from "./renderers/ml-video-player.renderer";
import { OrContentStripRenderer } from "./renderers/or-content-strip.renderer";
import { OrMetricsRenderer } from "./renderers/or-metrics.renderer";
import { OrTeamSectionRenderer } from "./renderers/or-team-section.renderer";
import { OrHeroBannerRenderer } from "./renderers/or-hero-banner.renderer";
import { MlCardBlogRenderer } from "./renderers/ml-card-blog.renderer";
import { OrListingRenderer } from "./renderers/or-listing.renderer";
import { OrRichTextRenderer } from "./renderers/or-rich-text.renderer";
import { OrImageInteractiveBlockRenderer } from "./renderers/or-image-interactive-block.renderer";
import { OrImageBlockRenderer } from "./renderers/or-image-block.renderer";
import { MlCollapseRenderer } from "./renderers/ml-collapse.renderer";
import { LazyRenderer } from "../../utils/lazy/lazy-renderer";
import {
  CMSBrand,
  CMSCard,
  CMSVertical,
  CMSVerticalTeam,
  CMSCarousel,
  CMSContainer,
  CMSBrandsContainer,
  CMSMedia,
  CMSHeroBanner,
  CMSRichText,
  CmsImageInteractiveBlock,
  CMSVideoPlayer,
  CMSMetrics,
  CMSQuote,
  CMSTeamSection,
  CMSCardBlog,
  CMSContentStrip,
  CMSListing,
  CMSImageBlock,
  CMSCollapse,
} from "@mono-repo-demo/atomic-library";

const LazyOrCarouselRenderer = lazy(
  () => import("./renderers/or-carousel.renderer")
);

export const BlocksRenderer = ({ blocks }: BlocksRendererProps) => {
  return (
    <View>
      {blocks
        ?.map((block, idx) => {
          if (!block) return null;
          switch (block.contentTypeId) {
            case "mlBrand":
              return <MlBrandRenderer block={block as CMSBrand} key={idx} />;
            case "mlMedia":
              return <MlMediaRenderer block={block as CMSMedia} key={idx} />;
            case "mlCard":
              return <MlCardRenderer block={block as CMSCard} key={idx} />;
            case "mlQuote":
              return <MlQuoteRenderer block={block as CMSQuote} key={idx} />;
            case "mlCardBlog":
              return (
                <MlCardBlogRenderer block={block as CMSCardBlog} key={idx} />
              );
            case "orRichText":
              return (
                <OrRichTextRenderer block={block as CMSRichText} key={idx} />
              );
            case "mlVertical":
              return (
                <MlVerticalRenderer block={block as CMSVertical} key={idx} />
              );
            case "mlVerticalTeam":
              return (
                <MlVerticalTeamRenderer
                  block={block as CMSVerticalTeam}
                  key={idx}
                />
              );
            case "mlVideoPlayer":
              return (
                <MlVideoPlayerRenderer
                  block={block as CMSVideoPlayer}
                  key={idx}
                />
              );
            case "orCarousel": {
              return (
                <LazyRenderer>
                  <LazyOrCarouselRenderer block={block as CMSCarousel} />
                </LazyRenderer>
              );
            }
            case "orHeroBanner":
              return (
                <OrHeroBannerRenderer
                  block={block as CMSHeroBanner}
                  key={idx}
                />
              );
            case "orContainer":
              return (
                <OrContainerRenderer block={block as CMSContainer} key={idx} />
              );
            case "orContentStrip":
              return (
                <OrContentStripRenderer
                  block={block as CMSContentStrip}
                  key={idx}
                />
              );
            case "orListing":
              return (
                <OrListingRenderer block={block as CMSListing} key={idx} />
              );
            case "orBrandsContainer":
              return (
                <OrBrandsContainerRenderer
                  block={block as CMSBrandsContainer}
                  key={idx}
                />
              );
            case "orImageInteractiveBlock":
              return (
                <OrImageInteractiveBlockRenderer
                  block={block as CmsImageInteractiveBlock}
                  key={idx}
                />
              );
            case "orMetrics":
              return (
                <OrMetricsRenderer block={block as CMSMetrics} key={idx} />
              );
            case "orTeamSection":
              return (
                <OrTeamSectionRenderer
                  block={block as CMSTeamSection}
                  key={idx}
                />
              );
            case "orImageBlock":
              return (
                <OrImageBlockRenderer
                  block={block as CMSImageBlock}
                  key={idx}
                />
              );
            case "mlCollapse":
              return (
                <MlCollapseRenderer block={block as CMSCollapse} key={idx} />
              );
            default:
              return null;
          }
        })
        .filter(Boolean)}
    </View>
  );
};
