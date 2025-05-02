import React from "react";
import { OrBrandsContainer } from "@components-library/ecommerce";
import { BlocksRenderer } from "../blocks-renderer";
import { OrBrandsContainerRendererProps } from "../renderer.types";

export const OrBrandsContainerRenderer = ({
  block,
}: OrBrandsContainerRendererProps) => {
  const { title, seeMoreLabel, showLink, background } = block;
  return (
    <OrBrandsContainer
      title={title}
      seeMoreLabel={seeMoreLabel}
      showLink={showLink}
      background={background}
    >
      <BlocksRenderer blocks={block.blocks} />
    </OrBrandsContainer>
  );
};
