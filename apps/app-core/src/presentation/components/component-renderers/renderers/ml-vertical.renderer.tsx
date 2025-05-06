import {
  MlVerticalProps,
  MlVertical,
  MlVerticalAlign,
  RichTextVariant,
  AtButtonVariants,
  AtButtonSize,
} from "@mono-repo-demo/atomic-library";
import { MlVerticalRendererProps } from "../renderer.types";
import Link from "next/link";
import { normalizeMedia } from "../../normalization/media";
import { OrRichTextRenderer } from "./or-rich-text.renderer";

export const MlVerticalRenderer = ({
  block,
  className,
}: MlVerticalRendererProps) => {
  const { image, icon, title, body, button, align } = block;
  const parsedIcon =
    icon === "heart" ? "heart-big" : (icon as MlVerticalProps["icon"]);
  const parsedAlignment = align as MlVerticalAlign;
  const buttonProps = {
    label: button?.label,
    href: button?.actionUrl,
    linkWrapper: Link,
    ...(button?.variant &&
      button.variant !== "default" && {
        buttonStyleProps: {
          variant: (button?.variant ??
            AtButtonVariants.SECONDARY) as AtButtonVariants,
          size: AtButtonSize.SMALL,
        },
      }),
  };

  const richTextBlock = {
    content: body,
    textAlignment: align ?? "start",
    variant: RichTextVariant.ML_VERTICAL,
  };

  return (
    <MlVertical
      title={title}
      image={image ? normalizeMedia(image) : undefined}
      body={<OrRichTextRenderer block={richTextBlock} />}
      buttonProps={buttonProps}
      icon={parsedIcon}
      className={className}
      align={parsedAlignment}
    />
  );
};
