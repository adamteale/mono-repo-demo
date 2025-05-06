import React from "react";

import { OrContainer, OrContainerProps } from "@mono-repo-demo/atomic-library";
import { BlocksRenderer } from "../blocks-renderer";
import { OrContainerRendererProps } from "../renderer.types";

export const OrContainerRenderer = ({ block }: OrContainerRendererProps) => {
  const {
    columns,
    columnsMobile,
    columnsSmallMobile,
    columnsTablet,
    title,
    titleAlign,
    subHeading,
    supportingText,
    hasParagraphs,
    paragraphLayout,
    background,
    contentTypeId,
  } = block;

  const titleAlignment = titleAlign as OrContainerProps["titleAlign"];
  const textOrganizaton =
    paragraphLayout as OrContainerProps["paragraphLayout"];
  const backgroundColor = background as OrContainerProps["background"];
  const desktopColumns = columns as OrContainerProps["columns"];
  const tabletColumns = columnsTablet as OrContainerProps["columnsTablet"];
  const smallMobileColumns =
    columnsSmallMobile as OrContainerProps["columnsSmallMobile"];
  const mobileColumns = columnsMobile as OrContainerProps["columnsMobile"];

  return (
    <OrContainer
      columns={desktopColumns}
      columnsMobile={mobileColumns}
      columnsSmallMobile={smallMobileColumns}
      columnsTablet={tabletColumns}
      title={title}
      titleAlign={titleAlignment}
      subHeading={subHeading}
      supportingText={supportingText}
      hasParagraphs={hasParagraphs}
      paragraphLayout={textOrganizaton}
      background={backgroundColor}
    >
      <BlocksRenderer key={title} blocks={block.blocks} />
    </OrContainer>
  );
};
