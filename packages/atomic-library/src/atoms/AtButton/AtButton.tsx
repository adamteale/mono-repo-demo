import { Button, Pressable, Text } from "react-native";

import { AtButtonProps, AtButtonVariant } from "@mono-repo-demo/atomic-library";
import { getStyles } from "./styles";

export const AtButton = ({
  compact = false,
  title,
  onAction,
  variant = AtButtonVariant.primary,
}: AtButtonProps) => {
  const styles = getStyles(variant, compact);
  return (
    <Pressable onPress={onAction} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
