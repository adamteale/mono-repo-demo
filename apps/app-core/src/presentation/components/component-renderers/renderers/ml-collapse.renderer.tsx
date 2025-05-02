import {
  MlCollapse,
  MlDropdownDividerPosition,
  RichTextVariant,
} from "@mono-repo-demo/atomic-library";
import { MlCollapseRendererProps } from "../renderer.types";
import { OrRichTextRenderer } from "./or-rich-text.renderer";

export const MlCollapseRenderer = ({ block }: MlCollapseRendererProps) => {
  const {
    dropdownElements,
    dividerPosition,
    hasBackgroundColor,
    showDivider,
    initiallyOpenIndex,
  } = block;

  const parsedDropdownArray = dropdownElements.map((item) => ({
    ...item,
    children: (
      <OrRichTextRenderer
        block={{
          content: item.content,
          textAlignment: "start",
          variant: RichTextVariant.ML_DROPDOWN,
        }}
      />
    ),
    title: item.title,
  }));

  return (
    <MlCollapse
      dropdownArray={parsedDropdownArray}
      showDivider={showDivider}
      dividerPosition={dividerPosition as MlDropdownDividerPosition}
      hasBackgroundColor={hasBackgroundColor}
      initiallyOpenIndex={initiallyOpenIndex}
    />
  );
};
