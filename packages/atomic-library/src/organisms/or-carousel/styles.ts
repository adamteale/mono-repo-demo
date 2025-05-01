import { StyleSheet } from "react-native";

export const getStyles = (
  defaultBulletColor?: string,
  activeBulletColor?: string
) => {
  return StyleSheet.create({
    carousel: {
      display: "flex",
      rowGap: 8,
    },
    innerColumn: {},
    bulletContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      columnGap: 4,
      justifyContent: "center",
    },
    activeBullet: {
      backgroundColor: activeBulletColor ?? "grey",
    },
    bullet: {
      width: 4,
      height: 4,
      borderRadius: 4,
      backgroundColor: defaultBulletColor ?? "grey",
    },
    centeredContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
