import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function getStyles() {
  const { top } = useSafeAreaInsets();
  return StyleSheet.create({
    customHeader: {
      backgroundColor: "#182958",
      paddingTop: top,
    },
  });
}
