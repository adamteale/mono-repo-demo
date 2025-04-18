import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { AtButton } from "@mono-repo-demo/atomic-mobile";
import { useHomeViewModel } from "./useHomeViewModel";

export const HomeScreen = ({ message }: DemoScreenProps) => {
  const { onTapNavigateToProductDetail } = useHomeViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text>{message}</Text>
      <AtButton
        onAction={() => {
          console.log("onAction");
          onTapNavigateToProductDetail();
        }}
        title="click"
      />
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
