import { StyleSheet } from "react-native";

export default function getStyles(top: number) {
  return StyleSheet.create({
    customHeader: {
      backgroundColor: "#182958",
      paddingVertical: 15,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: top + 60,
      paddingTop: top + 10,
      gap: 8,
    },
    headerTitle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    backButton: {
      padding: 5,
    },
  });
}
