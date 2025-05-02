import { OrListing } from "@mono-repo-demo/atomic-library";
import { OrListingRendererProps } from "../renderer.types";
import { MlCardBlogRenderer } from "./ml-card-blog.renderer";

export const OrListingRenderer = ({ block }: OrListingRendererProps) => {
  const { items } = block;

  return (
    <View className="container">
      <OrListing>
        {items.map((item, idx) => (
          <MlCardBlogRenderer key={idx} block={item} />
        ))}
      </OrListing>
    </View>
  );
};
