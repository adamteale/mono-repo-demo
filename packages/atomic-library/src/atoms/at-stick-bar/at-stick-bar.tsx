import { AtStickBarProps } from "./at-stick-bar.types";
import { AtIcon } from "../at-icon";
import { Pressable, Text, View } from "react-native";

export const AtStickBar = ({
  text,
  className,
  hidden,
  onClose,
}: AtStickBarProps) => {
  return (
    <View
      className={`flex items-center min-h-10 py-2 bg-navbar-content-primary ${className}`}
      data-testid="stick-bar"
      aria-hidden={!!hidden}
    >
      <View className="container flex items-center justify-between">
        <View className="h-4 w-4" />
        <View className="px-2 text-center text-secondary text-xs md:text-sm tracking-wide">
          <Text className="text-white">{text}</Text>
        </View>
        <Pressable
          className="cursor-pointer"
          onPress={onClose}
          data-testid="close-icon"
        >
          <AtIcon type="cancel" color="secondary" size={18} />
        </Pressable>
      </View>
    </View>
  );
};
