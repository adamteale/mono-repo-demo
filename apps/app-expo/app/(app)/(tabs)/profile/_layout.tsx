import React from "react";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import getStyles from "./styles";

export function CustomHeader() {
  const styles = getStyles();
  console.log("----CustomHeader");

  return (
    <View style={styles.customHeader}>
      <StatusBar barStyle="light-content" backgroundColor="#182958" />
    </View>
  );
}

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <Stack.Screen name={"profile"} />
    </Stack>
  );
}
