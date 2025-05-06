import React from "react";
import { BlocksRenderer } from "../../component-renderers";
import { TmFlexWrapperProps } from "./tm-flex-wrapper.types";
import { TmFlex } from "@mono-repo-demo/atomic-library";

export const TmFlexWrapper = ({ template }: TmFlexWrapperProps) => {
  console.log("TmFlexWrapper", template.contentTypeId, template.blocks?.length);
  return (
    <TmFlex>
      <BlocksRenderer blocks={template.blocks ?? []} />
    </TmFlex>
  );
};
