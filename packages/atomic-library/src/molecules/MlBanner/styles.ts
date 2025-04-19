import { type DimensionValue, StyleSheet } from "react-native";

export const stylex = (width: DimensionValue, height: DimensionValue) =>
  StyleSheet.create({
    container: {
      width,
      height,
      overflow: "hidden",
      backgroundColor: "#F0F5FE",
    },
    detailContainer: {
      padding: 20,
      gap: 8,
      flexDirection: "column",
      flex: 1,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#182958",
    },
    description: {
      fontSize: 20,
      color: "#182958",
    },
  });
