import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      width: "100%",
      backgroundColor: "#fff",
      gap: 16,
      borderRadius: 12,
      justifyContent: "flex-start",
      maxHeight: 410,
      overflow: "hidden",
    },
    header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#227496",
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
    detailContainer: {
      padding: 20,
      flexDirection: "column",
      flex: 1,
      width: "100%",
      gap: 8,
    },

    label: { fontSize: 14, textAlign: "left", color: "#23376D" },
    text: {
      fontSize: 20,
      textAlign: "left",
      fontWeight: "bold",
      color: "#23376D",
    },
    success: { color: "#7BD36A" },
    textSmall: {
      fontSize: 14,
      textAlign: "center",
      fontWeight: "bold",
      paddingVertical: 20,
      color: "#23376D",
    },
  });
};
