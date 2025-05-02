import {
  AtButtonSize,
  AtButtonVariants,
  MlCardBlog,
} from "@mono-repo-demo/atomic-library";
import { MlCardBlogRendererProps } from "../renderer.types";
import { normalizeMedia } from "../../normalization/media";

export const MlCardBlogRenderer = ({
  block,
  className,
}: MlCardBlogRendererProps) => {
  const { author, category, publicationDate, description, image, link, title } =
    block;

  const parsedImage = normalizeMedia(image);

  const linkProps = {
    label: link.label,
    href: link.actionUrl,
    ...(link?.variant &&
      link.variant !== "default" && {
        buttonStyleProps: {
          variant: (link.variant ??
            AtButtonVariants.SECONDARY) as AtButtonVariants,
          size: AtButtonSize.SMALL,
        },
      }),
  };

  return (
    <MlCardBlog
      author={author}
      category={category}
      publicationDate={publicationDate}
      description={description}
      image={parsedImage}
      link={linkProps}
      title={title}
      className={className}
    />
  );
};
