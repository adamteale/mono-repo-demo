import React from "react";
import { AtImage, AtImageVariants } from "@atomic-library/atoms";
import type { Meta, StoryObj } from "@storybook/react";
import { CenterStory } from "../../utils/CenterStory";
import { theme } from "@atomic-library/theme";

type Story = StoryObj<typeof AtImage>;

const AtImageMeta: Meta = {
  title: "atoms/at-image",
  component: AtImage,
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(AtImageVariants),
      defaultValue: AtImageVariants.sharp,
    },
    resizeMode: {
      control: "select",
      options: ["cover", "contain", "center", "repeat", "stretch"],
      defaultValue: "cover",
    },
  },
  decorators: [(Story) => <CenterStory story={Story} />],
};

export default AtImageMeta;

export const Default: Story = {
  args: {
    source: {
      uri: "https://pricesmart.bloomreach.io/cdn-cgi/image/fit=scale-down,width=1920,height=900,quality=90,format=webp/https://pricesmart.bloomreach.io/delivery/resources/content/gallery/pricesmart/homepage/fy25/may-2025/ciclo-a/pf-2830-slider-banner-tu.png",
      width: 960,
      height: 480,
    },
    resizeMode: "contain",
    variant: AtImageVariants.sharp,
    theme: theme,
    style: {
      width: 1000,
      height: 1000,
    },
  },
};
