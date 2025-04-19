import { Text, View } from "react-native";

import { MlToastProps } from "../MlToast";

import { getStyles } from "./styles";

export const MlToast = ({ title }: MlToastProps) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
