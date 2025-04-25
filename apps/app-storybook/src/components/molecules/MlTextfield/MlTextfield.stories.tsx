import type { Meta, StoryObj } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import { MlTextfield } from "@atomic-library/molecules";
import { CenterStory } from "src/components/utils/CenterStory";
import { View } from "react-native";

const meta: Meta<typeof MlTextfield> = {
  title: "molecules/ml-text-field",
  component: MlTextfield,
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => {
      return (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f1f1f1",
          }}
        >
          <CenterStory
            story={Story}
            style={{ width: "100%", height: 50, paddingHorizontal: 20 }}
          />
        </View>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof MlTextfield>;

// --- Stories ---

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
    value: "",
    onChange: action("onChange"),
  },
};

export const WithText: Story = {
  args: {
    placeholder: "Enter text here...",
    value: "Some initial text",
    onChange: action("onChange"),
  },
};
