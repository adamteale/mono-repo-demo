import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MenuScreenProps } from "./types";
import { AtButton, ThemeType } from "@mono-repo-demo/atomic-library";
import { useMenuScreenViewModel } from "./useMenuScreenViewModel";
import { useTheme } from "styled-components/native";

export const MenuScreen = ({}: MenuScreenProps) => {
  const { onLogoutTapped } = useMenuScreenViewModel();
  const theme = useTheme() as ThemeType;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
      <AtButton onAction={onLogoutTapped} title="Log Out" theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
