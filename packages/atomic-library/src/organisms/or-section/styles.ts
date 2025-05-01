import { StyleSheet } from "react-native";

export const stylex = (headerPaddingHorizontal?: number) => {
  return StyleSheet.create({
    header: {
      width: "100%",
      paddingBottom: 8,
    },
    headerContent: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: 4,
      justifyContent: "space-between",
      paddingHorizontal: headerPaddingHorizontal ?? 8,
    },
  });
};
