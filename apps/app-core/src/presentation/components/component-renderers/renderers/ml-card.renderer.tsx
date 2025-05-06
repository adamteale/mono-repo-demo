import React from "react";
import { MlCardRendererProps } from "../renderer.types";
import Link from "next/link";
import { normalizeMedia } from "../../normalization/media";
import { MlCard, MlCardProps } from "@mono-repo-demo/atomic-library";

export const MlCardRenderer = ({ block, className }: MlCardRendererProps) => {
  if (!block.actionUrl || !block.label || !block.image) return null;

  const cardProps: MlCardProps = {
    label: block.label,
    linkProps: {
      href: block.actionUrl,
      linkWrapper: Link,
    },
    image: normalizeMedia(block.image),
  };

  return <MlCard {...cardProps} className={className} />;
};
