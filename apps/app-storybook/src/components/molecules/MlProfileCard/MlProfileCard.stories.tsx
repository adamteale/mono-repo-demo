import type { Meta, StoryObj } from "@storybook/react";
import { MlProfileCard } from "@atomic-library/index";
import { CenterStory } from "src/components/utils/CenterStory";

// Define metadata
const meta: Meta<typeof MlProfileCard> = {
  title: "molecules/ml-profile-card",

  component: MlProfileCard,
  argTypes: {
    nameLabel: { control: "text" },
    membershipNumberLabel: { control: "text" },
    expirationDateLabel: { control: "text" },
  },
  decorators: [
    (Story) => {
      return (
        <CenterStory
          story={Story}
          style={{ width: "50%", justifyContent: "center" }}
        />
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof MlProfileCard>;

// --- Stories ---
export const Default: Story = {
  args: {
    nameLabel: "John Doe",
    membershipNumberLabel: "1234567890",
    expirationDateLabel: "12/31/2025",
  },
};
