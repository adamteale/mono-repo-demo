import {
  AtButtonVariants,
  OrRichText,
  RichTextVariant,
} from "@mono-repo-demo/atomic-library";
import { normalizeContentfulRichText } from "../../normalization/contentful-rich-text";
import { CMSRichText } from "@mono-repo-demo/atomic-library";
import Link from "next/link";

interface OrRichTextRendererProps {
  block: CMSRichText;
  className?: string;
}

export const OrRichTextRenderer = ({
  block,
  className,
}: OrRichTextRendererProps) => {
  const content = normalizeContentfulRichText(block.content);
  const buttonProps = block.button
    ? {
        label: block.button?.label,
        href: block.button?.actionUrl,
        ...(block.button?.variant &&
          block.button.variant !== "default" && {
            buttonStyleProps: {
              variant: getButtonVariant(block.button.variant),
            },
          }),
        linkWrapper: Link,
      }
    : undefined;

  if (!content) return null;

  return (
    <OrRichText
      variant={block.variant as RichTextVariant}
      title={block.title}
      textAlignment={block.textAlignment}
      button={buttonProps}
      content={content}
      className={className}
    />
  );
};

const getButtonVariant = (variant: string | undefined) => {
  switch (variant) {
    case "primary":
      return AtButtonVariants.PRIMARY;

    case "secondary":
      return AtButtonVariants.SECONDARY;

    case "tertiary":
      return AtButtonVariants.TERTIARY;

    case "quartenary":
      return AtButtonVariants.QUARTENARY;

    default:
      return AtButtonVariants.PRIMARY;
  }
};
