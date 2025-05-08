import React, { lazy, useCallback } from "react";
import { FlatList, View } from "react-native";

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

export const BlocksRenderer = ({ blocks, id }: BlocksRendererProps) => {
  const renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      if (!item) return null;

      switch (item.contentTypeId) {
        case "mlBrand":
          return <MlBrandRenderer block={item as CMSBrand} key={index} />;
        case "mlMedia":
          return <MlMediaRenderer block={item as CMSMedia} key={index} />;
        case "mlCard":
          return <MlCardRenderer block={item as CMSCard} key={index} />;
        case "mlQuote":
          return <MlQuoteRenderer block={item as CMSQuote} key={index} />;
        case "mlCardBlog":
          return <MlCardBlogRenderer block={item as CMSCardBlog} key={index} />;
        case "orRichText":
          return <OrRichTextRenderer block={item as CMSRichText} key={index} />;
        case "mlVertical":
          return <MlVerticalRenderer block={item as CMSVertical} key={index} />;
        case "mlVerticalTeam":
          return (
            <MlVerticalTeamRenderer
              block={item as CMSVerticalTeam}
              key={index}
            />
          );
        case "mlVideoPlayer":
          return (
            <MlVideoPlayerRenderer block={item as CMSVideoPlayer} key={index} />
          );
        case "orCarousel": {
          return <LazyOrCarouselRenderer block={item as CMSCarousel} />;
        }
        case "orHeroBanner":
          return (
            <OrHeroBannerRenderer
              block={item as CMSHeroBanner}
              key={index}
              className="w-screen"
            />
          );
        case "orContainer":
          return (
            <OrContainerRenderer block={item as CMSContainer} key={index} />
          );
        case "orContentStrip":
          return (
            <OrContentStripRenderer
              block={item as CMSContentStrip}
              key={`${index}+${item.contentTypeId}`}
            />
          );
        case "orListing":
          return <OrListingRenderer block={item as CMSListing} key={index} />;
        case "orBrandsContainer":
          return (
            <OrBrandsContainerRenderer
              block={item as CMSBrandsContainer}
              key={index}
            />
          );
        case "orImageInteractiveBlock":
          return (
            <OrImageInteractiveBlockRenderer
              block={item as CmsImageInteractiveBlock}
              key={index}
            />
          );
        case "orMetrics":
          return <OrMetricsRenderer block={item as CMSMetrics} key={index} />;
        case "orTeamSection":
          return (
            <OrTeamSectionRenderer block={item as CMSTeamSection} key={index} />
          );
        case "orImageBlock":
          return (
            <OrImageBlockRenderer block={item as CMSImageBlock} key={index} />
          );
        case "mlCollapse":
          return <MlCollapseRenderer block={item as CMSCollapse} key={index} />;
        default:
          return null;
      }
    },
    []
  );

  const keyExtractor = useCallback((item: any, index: number): string => {
    return item?.id ? item.id.toString() : index.toString();
  }, []);

  return (
    <View className="w-screen h-full">
      <FlatList
        data={blocks}
        renderItem={(item) => {
          return (
            <View className="w-screen lg:max-w-[90rem]">
              {renderItem(item)}
            </View>
          );
        }}
        keyExtractor={keyExtractor}
        horizontal={false}
        scrollEnabled={true}
        className="h-screen" //important for web
      />
    </View>
  );
};
