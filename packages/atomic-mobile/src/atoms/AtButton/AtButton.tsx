import { Button } from "react-native";

import { AtButtonProps } from "@atomic-core/index";

export const AtButton = ({ title, onAction }: AtButtonProps) => {
  return <Button title={title} onPress={onAction} />;
};
