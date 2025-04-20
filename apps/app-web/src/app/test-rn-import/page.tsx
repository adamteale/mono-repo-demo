import React from "react";
import { View, Text } from "react-native";

export default function TestRnImport() {
  console.log("Rendering TestRnImport");
  return (
    <View style={{ padding: 20 }}>
      <Text>Testing React Native Import</Text>
      <Text>If this renders, aliasing might be working.</Text>
    </View>
  );
}
