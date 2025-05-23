import React from "react";
import { BlocksRenderer } from "../../component-renderers";
import { TmFlexWrapperProps } from "./tm-flex-wrapper.types";
import { TmFlex } from "@mono-repo-demo/atomic-library";

export const TmFlexWrapper = ({
  template,
  refresh,
  listKey,
}: TmFlexWrapperProps) => {
  return (
    <TmFlex>
      <BlocksRenderer
        blocks={template.blocks ?? []}
        refresh={refresh}
        listKey={listKey}
      />
    </TmFlex>
  );
};
