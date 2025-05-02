import { useState } from "react";
import { MlVideoPlayerProps } from "./ml-video-player.types";
import {
  getVideoId,
  getVideoSrc,
  getVideoThumbnail,
} from "./utils/get-video-info";
import { AtPlayButton, AtPlayButtonSize } from "../../atoms";
import { MlMedia } from "../ml-media";
import { useIsTablet } from "../../utils";

export const MlVideoPlayer = ({ videoUrl, thumbnail }: MlVideoPlayerProps) => {
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isDoneLoadingVideo, setIsDoneLoadingVideo] = useState(false);
  const [iframeSrc, setIFrameSrc] = useState("");
  const isTablet = useIsTablet();

  const videoDetails = getVideoId(videoUrl);

  if (videoDetails.type === "invalid") {
    return (
      <View className="container py-10 sm:py-8 md:py-12 lg:py-10 xl:py-12">
        <View className="flex items-center justify-center w-full h-full aspect-video bg-color-picker-black text-secondary text-lgx">
          Unsupported video format.
        </View>
      </View>
    );
  }

  const videoSrc = getVideoSrc(videoDetails);
  const thumbnailSrc = thumbnail ?? getVideoThumbnail(videoDetails);

  const handlePlayClick = () => {
    setIsVideoLoading(true);
    setIFrameSrc(videoSrc ?? "");
  };

  const handleOnLoad = () => {
    if (iframeSrc !== "") setIsDoneLoadingVideo(true);
  };

  return (
    <View className="container py-10 sm:py-8 md:py-12 lg:py-10 xl:py-12">
      <View className="relative">
        <View className="w-full h-full aspect-video bg-secondary-black">
          {!isDoneLoadingVideo && (
            <MlMedia
              dataTestId={`video-${videoDetails.id}-thumbnail`}
              {...thumbnailSrc}
            />
          )}
          {!isDoneLoadingVideo && (
            <AtPlayButton
              size={isTablet ? AtPlayButtonSize.SMALL : AtPlayButtonSize.LARGE}
              isLoading={isVideoLoading}
              onClick={handlePlayClick}
              className="absolute inset-0 bg-neutral-950 bg-opacity-20 hover:bg-opacity-40"
            />
          )}
        </View>

        <iframe
          className={`${
            isDoneLoadingVideo
              ? "absolute inset-0 aspect-video w-full h-full"
              : "hidden"
          }`}
          src={iframeSrc}
          role="iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={() => handleOnLoad()}
        />
      </View>
    </View>
  );
};
