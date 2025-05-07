import React from "react";
import { View } from "react-native";
import { OrHeroBanner } from "@mono-repo-demo/atomic-library";
import { TmBlogArticleProps } from "./tm-blog-article.types";

export const TmBlogArticle = ({
  blogBannerProps,
  blogContent,
}: TmBlogArticleProps) => {
  return (
    <View
      className="flex flex-col gap-y-10 md:gap-y-16 xl:gap-y-20"
      data-testid="blog-article-container"
    >
      <OrHeroBanner {...blogBannerProps} />
      <View className="container flex flex-col gap-8 md:gap-10">
        {blogContent}
      </View>
    </View>
  );
};
