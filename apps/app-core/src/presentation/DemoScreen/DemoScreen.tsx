import { AtButton } from "@mono-repo-demo/atomic-mobile";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DemoScreenProps {
  message: string;
}

export const DemoScreen: React.FC<DemoScreenProps> = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Demo Screen</Text>
      <Text>{message}</Text>
      <AtButton onAction={() => console.log("onAction")} title="click" />
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
