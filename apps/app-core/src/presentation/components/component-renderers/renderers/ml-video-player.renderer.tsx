import { MlVideoPlayer } from "@mono-repo-demo/atomic-library";
import { normalizeMedia } from "../../normalization/media";
import { MlVideoPlayerRendererProps } from "../renderer.types";

export const MlVideoPlayerRenderer = ({
  block,
}: MlVideoPlayerRendererProps) => {
  const { video, videoUrl, thumbnail } = block;

  const normalizedThumbnail = normalizeMedia(thumbnail);

  return (
    <MlVideoPlayer
      videoUrl={videoUrl ?? video?.file.url ?? ""}
      thumbnail={normalizedThumbnail}
    />
  );
};
