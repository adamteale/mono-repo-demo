import React from "react";
import { OrRichTextProps } from "../../renderer.types";
import { RichText } from "./rich-text";

export const OrRichTextRenderer = ({ block, className }: OrRichTextProps) => {
  const { content, textAlignment, title } = block;
  return (
    <RichText
      text={content}
      textAlignment={textAlignment}
      className={className}
      title={title}
    />
  );
};
