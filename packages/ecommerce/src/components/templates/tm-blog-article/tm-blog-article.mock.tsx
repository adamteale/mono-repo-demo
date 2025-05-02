import { OrHeroBannerProps } from "@mono-repo-demo/atomic-library";
export const bannerTitle = "Sample Title";
export const bannerSubtitle = "Sample Subtitle";
export const bannerPretitle = "Sample Pretitle";
export const imageAltText = "Desktop Image";
export const imageUrl = "desktop-image-url";
export const blogTag = "tag";
export const blogAuthorName = "Author Name";
export const blogContentText = "Blog Heading";
export const mockBannerProps: OrHeroBannerProps = {
  title: bannerTitle,
  subtitle: bannerSubtitle,
  pretitle: bannerPretitle,
  image: {
    imageDesktop: { src: imageUrl, alt: imageAltText },
  },
  buttons: [],
  author: { authorName: blogAuthorName },
  tagLabel: blogTag,
};
export const mockContent = (
  <View>
    <h1>{blogContentText}</h1>
  </View>
);
export const mockProps = {
  blogBannerProps: mockBannerProps,
  blogContent: mockContent,
};
