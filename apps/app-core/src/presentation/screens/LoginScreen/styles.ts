import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "#23376D",
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
      gap: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
    },
  });
};
