import React from "react";

import {
  TmBlogArticle,
  TmBlogArticleProps,
} from "@components-library/ecommerce";
import { BlocksRenderer } from "../../component-renderers";
import { OrHeroBannerAuthorTextColor } from "@mono-repo-demo/atomic-library";
import { TmLegalSupportWrapperProps } from "./tm-blog-article-wrapper.types";

export const TmBlogArticleWrapper = ({
  template,
}: TmLegalSupportWrapperProps) => {
  const {
    authorName,
    category,
    description,
    media,
    publicationDate,
    title,
    tagLabel,
    blocks,
    authorPicture,
    authorSectionTextColor,
  } = template;

  const tmBlogArticleProps: TmBlogArticleProps = {
    blogBannerProps: {
      title,
      image: {
        imageDesktop: {
          src: media.imageDesktop.file.url,
          alt: media.imageDesktop.title,
        },
        imageMobile: {
          src: media.imageMobile ? media.imageMobile.file.url : "",
          alt: media.imageMobile ? media.imageMobile.title : "",
        },
        imageTablet: {
          src: media.imageTablet ? media.imageTablet.file.url : "",
          alt: media.imageTablet ? media.imageTablet.title : "",
        },
      },
      author: {
        authorName: `By ${authorName}`,
        authorPicture: {
          src: authorPicture?.file.url ?? "",
        },
        publicationDate: publicationDate,
        authorTextColor: authorSectionTextColor as OrHeroBannerAuthorTextColor,
      },
      subtitle: description,
      tagLabel: tagLabel,
      buttons: [],
      pretitle: category,
    },
    blogContent: <BlocksRenderer blocks={blocks} />,
  };

  return <TmBlogArticle {...tmBlogArticleProps} />;
};
