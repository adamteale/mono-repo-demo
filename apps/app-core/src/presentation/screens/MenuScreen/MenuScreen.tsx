import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MenuScreenProps } from "./types";

export const MenuScreen = ({}: MenuScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
