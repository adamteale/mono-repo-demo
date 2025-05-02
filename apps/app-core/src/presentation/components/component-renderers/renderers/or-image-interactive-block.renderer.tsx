import {
  MlImageInteractiveProps,
  OrImageInteractiveBlock,
  RichTextVariant,
} from "@mono-repo-demo/atomic-library";
import { OrImageInteractiveBlockRendererProps } from "../renderer.types";
import { normalizeFile } from "../../normalization/file";
import { OrRichTextRenderer } from "./or-rich-text.renderer";

export const OrImageInteractiveBlockRenderer = ({
  block,
}: OrImageInteractiveBlockRendererProps) => {
  const { body, images, subtitle } = block;

  const parsedImages: MlImageInteractiveProps[] = images.map((image) => ({
    image: normalizeFile(image),
  }));
  const richTextBlock = {
    content: body.content,
    variant: RichTextVariant.DEFAULT,
  };

  return (
    <OrImageInteractiveBlock
      body={<OrRichTextRenderer block={richTextBlock} />}
      subtitle={subtitle}
      images={parsedImages}
    />
  );
};
