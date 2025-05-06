import { OrImageBlock, RichTextVariant } from "@mono-repo-demo/atomic-library";
import { normalizeMedia } from "../../normalization/media";
import { OrImageBlockRendererProps } from "../renderer.types";
import { OrRichTextRenderer } from "./or-rich-text.renderer";

export const OrImageBlockRenderer = ({ block }: OrImageBlockRendererProps) => {
  const {
    body,
    images,
    title,
    isInverted,
    isVertical,
    pretitle,
    subtitle,
    supportText,
  } = block;

  const medias = images.map((image) => normalizeMedia(image));

  const richTextBlock = {
    content: body.content,
    variant: RichTextVariant.DEFAULT,
  };

  return (
    <OrImageBlock
      title={title}
      images={medias}
      body={<OrRichTextRenderer block={richTextBlock} />}
      pretitle={pretitle}
      subtitle={subtitle}
      supportText={supportText}
      isInverted={isInverted}
      isVertical={isVertical}
    />
  );
};
