import React, { useState, useEffect, FC, ReactNode } from "react";
import { Meta, StoryObj, StoryContext, Args } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Dimensions, Platform, View } from "react-native";
import { MlBanner, theme } from "@atomic-library/index";
import { CenterStory } from "src/components/utils/CenterStory";

interface ResponsiveBannerWrapperProps {
  children: (width: number) => ReactNode;
}

const ResponsiveBannerWrapper: FC<ResponsiveBannerWrapperProps> = ({
  children,
}) => {
  const [width, setWidth] = useState<number>(() => {
    const initialWidth = Dimensions.get("window").width;
    return typeof initialWidth === "number" && !isNaN(initialWidth)
      ? initialWidth
      : 300;
  });

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = Dimensions.get("window").width;
      if (typeof newWidth === "number" && !isNaN(newWidth)) {
        setWidth(newWidth);
      } else {
        console.warn("Invalid width from Dimensions API:", newWidth);
      }
    };

    if (Platform.OS === "web") {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }
  }, []);

  const validWidth = typeof width === "number" && !isNaN(width) ? width : 300;

  return <>{children(validWidth)}</>;
};

// --- Storybook Meta  ---
const MlBannerMeta: Meta<typeof MlBanner> = {
  title: "molecules/ml-banner",
  component: MlBanner,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    ctaText: { control: "text" },
    deeplink: { control: "text" },
    // containerWidth: { control: "number" }, // Controlled by decorator
    banner: { control: "object" },
    onPress: { action: "pressed" },
    testID: { control: "text" },
  },
  decorators: [
    (Story, context: StoryContext<Args>) => (
      <ResponsiveBannerWrapper>
        {(width) => (
          // Render the story, merging original args with dynamic width
          <Story args={{ ...context.args, containerWidth: width }} />
        )}
      </ResponsiveBannerWrapper>
    ),
    // Inner decorator: Centers the responsive banner
    (Story) => <CenterStory style={{ width: "100%" }} story={Story} />,
  ],
};

export default MlBannerMeta;

type Story = StoryObj<typeof MlBannerMeta>;

// --- Stories ---

export const Default: Story = {
  args: {
    banner: {
      source: {
        uri: "https://pricesmart.bloomreach.io/cdn-cgi/image/fit=scale-down,width=1920,height=900,quality=90,format=webp/https://pricesmart.bloomreach.io/delivery/resources/content/gallery/pricesmart/homepage/fy25/may-2025/ciclo-a/pf-2830-slider-banner-tu.png",
      },
    },
    title: "Premium mattresses and better sleep ",
    description:
      "Discover top comfort with advanced sleep technology from Serta. Give your home the upgrade it deserves",
    ctaText: "Shop now!",
    onPress: action("Banner Pressed"),
    testID: "default-banner",
  },
};

export const NoDescription: Story = {
  args: {
    title: "Exclusive Deal",
    ctaText: "Learn More",
    deeplink: "https://example.com/exclusive",
    banner: {
      source: { uri: "https://via.placeholder.com/960x480" },
      alt: "Banner image",
    },
    description: undefined,
    onPress: action("Banner Pressed"),
    testID: "no-description-banner",
  },
};
