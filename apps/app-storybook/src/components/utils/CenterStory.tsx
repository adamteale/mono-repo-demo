import React from "react";
import { View, type StyleProp, type ViewStyle } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "@atomic-library/theme";

type Props = {
  onlyVertical?: boolean;
  story: () => React.JSX.Element;
  style?: StyleProp<ViewStyle>;
};

export const CenterStory = ({
  story: Story,
  style,
  onlyVertical = false,
}: Props) => (
  <ThemeProvider theme={theme}>
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View
        style={[
          {
            justifyContent: "center",
            alignItems: onlyVertical ? undefined : "center",
            alignSelf: "center",
          },
          style,
        ]}
      >
        <Story />
      </View>
    </View>
  </ThemeProvider>
);
