import React from "react";
import { AtButton, AtButtonVariant } from "@atomic-library/atoms";
import { theme } from "@mono-repo-demo/atomic-library";

import type { Meta, StoryObj } from "@storybook/react";
import { CenterStory } from "../../utils/CenterStory";

const AtButtonMeta = {
  title: "atoms/at-button",

  component: AtButton,
  argTypes: {
    title: { control: "text" },
    variant: {
      control: "select",
      options: [AtButtonVariant.primary],
    },
    compact: {
      control: "boolean",
      defaultValue: true,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
  },
  decorators: [(Story) => <CenterStory story={Story} />],
} satisfies Meta<typeof AtButton>;

export default AtButtonMeta;
type Story = StoryObj<typeof AtButtonMeta>;

// --- Stories ---

export const PrimaryLarge: Story = {
  args: {
    compact: true,
    title: "Primary Large Button",
    variant: AtButtonVariant.primary,
    theme: theme,
    onAction: () => {
      alert("Tap on Primary Large Button");
    },
  },
};
