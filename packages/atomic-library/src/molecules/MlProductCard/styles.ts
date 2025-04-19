import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#fff",
      gap: 16,
      height: 200,
      maxHeight: 200,
      borderRadius: 8,
    },
    detailContainer: {
      flexDirection: "column",
      flex: 1,
    },
    image: {
      width: 100,
      height: 100,
    },
    price: {
      fontSize: 20,
      marginBottom: 15,
      fontWeight: "bold",
      color: "#182958",
    },
    title: {
      fontSize: 18,
      marginBottom: 15,
      color: "#182958",
      fontWeight: 600,
    },
    status: { color: "#72A217", fontWeight: "bold", fontSize: 16 },
  });
};
