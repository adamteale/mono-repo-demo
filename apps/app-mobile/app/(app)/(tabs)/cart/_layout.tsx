import { Slot } from "expo-router";
import React from "react";
import { Stack, useNavigation } from "expo-router";
import { StatusBar, View } from "react-native";
import getStyles from "./styles";

export function CustomHeader() {
  const styles = getStyles();
  return (
    <View style={styles.customHeader}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
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
