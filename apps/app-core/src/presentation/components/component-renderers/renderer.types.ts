import {
  CMSHeroBanner,
  CMSBrand,
  CMSBrandsContainer,
  CMSCard,
  CMSCarousel,
  CMSContainer,
  CMSMedia,
  CMSVertical,
  CMSVerticalTeam,
  CMSRichText,
  CmsImageInteractiveBlock,
  CMSVideoPlayer,
  CMSQuote,
  CMSMetrics,
  CMSTeamSection,
  CMSCardBlog,
  CMSContentStrip,
  CMSListing,
  CMSImageBlock,
  CMSCollapse,
} from "@mono-repo-demo/atomic-library";

export interface BlocksRendererProps {
  blocks?: Array<
    | CMSCarousel
    | CMSContainer
    | CMSBrand
    | CMSMedia
    | CMSCard
    | CMSVertical
    | CMSBrandsContainer
    | CMSVideoPlayer
    | CMSContentStrip
    | CMSHeroBanner
    | CMSQuote
    | CMSMetrics
    | CMSTeamSection
    | CMSListing
    | CMSImageBlock
    | CMSCollapse
    | CMSRichText
  >;
  id?: string;
  refresh?: {
    onRefresh: () => void;
    refreshing: boolean;
  };
}

export interface RendererMethodProps<T> {
  block: T;
  className?: string;
}

export type OrRichTextProps = RendererMethodProps<CMSRichText>;
export type OrCarouselRendererProps = RendererMethodProps<CMSCarousel>;
export type OrHeroBannerRendererProps = RendererMethodProps<CMSHeroBanner>;
export type MlVerticalRendererProps = RendererMethodProps<CMSVertical>;
export type MlVerticalTeamRendererProps = RendererMethodProps<CMSVerticalTeam>;
export type MlCardRendererProps = RendererMethodProps<CMSCard>;
export type MlCardBlogRendererProps = RendererMethodProps<CMSCardBlog>;
export type OrContainerRendererProps = RendererMethodProps<CMSContainer>;
export type OrBrandsContainerRendererProps =
  RendererMethodProps<CMSBrandsContainer>;
export type MlBrandRendererProps = RendererMethodProps<CMSBrand>;
export type MlMediaRendererProps = RendererMethodProps<CMSMedia>;
export type OrImageInteractiveBlockRendererProps =
  RendererMethodProps<CmsImageInteractiveBlock>;
export type MlVideoPlayerRendererProps = RendererMethodProps<CMSVideoPlayer>;
export type OrContentStripRendererProps = RendererMethodProps<CMSContentStrip>;
export type OrListingRendererProps = RendererMethodProps<CMSListing>;
export type MlQuoteRendererProps = RendererMethodProps<CMSQuote>;
export type OrMetricsRendererProps = RendererMethodProps<CMSMetrics>;
export type OrTeamSectionRendererProps = RendererMethodProps<CMSTeamSection>;
export type OrImageBlockRendererProps = RendererMethodProps<CMSImageBlock>;
export type MlCollapseRendererProps = RendererMethodProps<CMSCollapse>;
