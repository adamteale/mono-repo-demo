import { OrMetrics, OrMetricsProps } from "@mono-repo-demo/atomic-library";
import { OrMetricsRendererProps } from "../renderer.types";
import { normalizeMedia } from "../../normalization/media";

export const OrMetricsRenderer = ({ block }: OrMetricsRendererProps) => {
  const { title, description, image, metricArray, align } = block;
  const contentAlignment = align as OrMetricsProps["align"];

  return (
    <OrMetrics
      title={title}
      description={description}
      image={image ? normalizeMedia(image) : undefined}
      metricArray={metricArray}
      align={contentAlignment}
    />
  );
};
