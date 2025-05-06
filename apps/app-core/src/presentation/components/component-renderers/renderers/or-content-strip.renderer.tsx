import {
  AtButtonVariants,
  OrContentStrip,
  OrContentStripProps,
} from "@mono-repo-demo/atomic-library";
import { OrContentStripRendererProps } from "../renderer.types";
import { normalizeMedia } from "../../normalization/media";

export const OrContentStripRenderer = ({
  block,
  className,
}: OrContentStripRendererProps) => {
  const {
    align,
    title,
    subtitle,
    paragraph,
    firstItem,
    secondItem,
    thirdItem,
    link,
    image,
    backgroundColor,
    listType,
    layoutType,
  } = block;
  const distribution = align as OrContentStripProps["align"];
  const backdropColor =
    backgroundColor as OrContentStripProps["backgroundColor"];
  const listStyle = listType as OrContentStripProps["listType"];
  const widthMode = layoutType as OrContentStripProps["layoutType"];

  const linkProps = {
    label: link?.label,
    href: link?.actionUrl,
    ...(link?.variant &&
      link.variant !== "default" && {
        buttonStyleProps: {
          variant: (link.variant ??
            AtButtonVariants.TERTIARY) as AtButtonVariants,
        },
      }),
  };

  return (
    <OrContentStrip
      align={distribution}
      title={title}
      subtitle={subtitle}
      paragraph={paragraph}
      firstItem={firstItem}
      secondItem={secondItem}
      thirdItem={thirdItem}
      link={linkProps}
      image={image ? normalizeMedia(image) : undefined}
      backgroundColor={backdropColor}
      listType={listStyle}
      layoutType={widthMode}
      className={className}
    />
  );
};
