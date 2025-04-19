import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    safeArea: {
      height: "100%",
      flexDirection: "column",
    },
    scrollContentContainer: {},
    scrollContainer: {},
    text: {
      fontSize: 20,
      fontWeight: "bold",
    },
    title: { fontSize: 20, marginBottom: 15 },
    breadcrumbSection: {
      height: 80,
      width: "100%",
      padding: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    filterSection: {
      height: 80,
      width: "100%",
      padding: 20,
      flexDirection: "row",
      justifyContent: "flex-end",
      backgroundColor: "#fff",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
  });
};
