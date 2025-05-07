import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MenuScreenProps } from "./types";
import { AtButton } from "@mono-repo-demo/atomic-library";
import { useMenuScreenViewModel } from "./useMenuScreenViewModel";

export const MenuScreen = ({}: MenuScreenProps) => {
  const { onLogoutTapped } = useMenuScreenViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
      <AtButton
        onClick={onLogoutTapped}
        children={<Text className="text-white">Logout</Text>}
      />
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
