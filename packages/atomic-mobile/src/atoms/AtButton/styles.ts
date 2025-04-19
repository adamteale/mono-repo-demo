import { AtButtonVariant } from "@mono-repo-demo/atomic-core";
import { StyleSheet } from "react-native";

export const getStyles = (variant: AtButtonVariant, compact: boolean) => {
  const backgroundColor = () => {
    switch (variant) {
      case AtButtonVariant.primary:
        return "#24386E";
      case AtButtonVariant.secondary:
        return "#fff";
      case AtButtonVariant.cta:
        return "#EE4124";
      default:
        return undefined;
    }
  };

  const borderColor = () => {
    switch (variant) {
      case AtButtonVariant.primary:
        return "#fff";
      case AtButtonVariant.secondary:
        return "#24386E";
      case AtButtonVariant.cta:
        return "#EE4124";
      default:
        return undefined;
    }
  };
  const borderwidth = () => {
    switch (variant) {
      case AtButtonVariant.primary:
        return 2;
      default:
        return 0;
    }
  };
  const titleColour = () => {
    switch (variant) {
      case AtButtonVariant.primary:
        return "#fff";
      case AtButtonVariant.secondary:
        return "#24386E";
      case AtButtonVariant.cta:
        return "#fff";
      default:
        return undefined;
    }
  };

  const borderRadius = () => {
    switch (variant) {
      case AtButtonVariant.cta:
        return 8;
      default:
        return 0;
    }
  };

  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor(),
      paddingHorizontal: 40,
      paddingVertical: 20,
      borderRadius: borderRadius(),
      borderColor: borderColor(),
      borderWidth: borderwidth(),
      width: compact ? undefined : "100%",
    },
    title: {
      color: titleColour(),
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
};
