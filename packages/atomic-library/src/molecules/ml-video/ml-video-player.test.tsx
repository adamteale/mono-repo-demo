import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MlVideoPlayer } from "./ml-video-player";

const validVideoUrl = "https://vimeo.com/946753134";

const mockThumbnail = {
  imageDesktop: {
    src: "https://picsum.photos/1920/1080",
  },
};

describe("molecules/ml-video-player", () => {
  it("renders error when URL is invalid", () => {
    const { getByText } = render(<MlVideoPlayer videoUrl={"Talca"} />);
    expect(getByText("Unsupported video format.")).toBeInTheDocument();
  });

  it("displays thumbnail before video is played", () => {
    const { getByTestId } = render(
      <MlVideoPlayer videoUrl={validVideoUrl} thumbnail={mockThumbnail} />
    );
    expect(getByTestId("video-946753134-thumbnail")).toBeInTheDocument();
  });

  it("loads video iframe upon play button click", async () => {
    const { getByRole } = render(<MlVideoPlayer videoUrl={validVideoUrl} />);
    const playButton = getByRole("button");
    fireEvent.click(playButton);
    const iframe = getByRole("iframe");
    expect(iframe).toHaveAttribute(
      "src",
      "https://player.vimeo.com/video/946753134?autoplay=1"
    );
  });

  it("hides play button and thumbnail after video is loaded", () => {
    const { getByRole, queryByRole } = render(
      <MlVideoPlayer videoUrl={validVideoUrl} thumbnail={mockThumbnail} />
    );
    const playButton = getByRole("button");
    fireEvent.click(playButton);
    const iframe = getByRole("iframe");
    fireEvent.load(iframe);
    expect(queryByRole("button")).toBeNull();
    expect(queryByRole("img")).toBeNull();
  });
});
