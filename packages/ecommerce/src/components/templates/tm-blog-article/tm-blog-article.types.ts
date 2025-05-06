import { OrHeroBannerProps } from "@mono-repo-demo/atomic-library";
export interface TmBlogArticleProps {
  blogBannerProps: Pick<
    OrHeroBannerProps,
    | "title"
    | "subtitle"
    | "pretitle"
    | "image"
    | "buttons"
    | "author"
    | "tagLabel"
  >;
  blogContent: React.ReactNode;
}
