import { Text, View } from "react-native";
import { AtIcon, AtLink } from "../../atoms";
import { MlMedia } from "../ml-media";
import { MlVerticalProps, MlVerticalAlign } from "./ml-vertical.types";
import { containerClasses } from "./ml-vertical.variants";

export const MlVertical = ({
  title,
  body,
  image,
  icon,
  buttonProps,
  className = "",
  align = MlVerticalAlign.START,
}: MlVerticalProps) => {
  return (
    <View className="flex flex-col gap-8 justify-between place-self-center p-4 w-full h-full max-w-88 xl:max-w-97 rounded-xl">
      <View className={`${containerClasses({ align })} ${className}`}>
        {image && (
          <View>
            <MlMedia
              {...image}
              wrapperClassName="[&>img]:rounded-lg max-h-[31.25rem]"
            />
          </View>
        )}

        {!!icon && (
          <View className="flex justify-center">
            <AtIcon
              className="w-10.5 h-10.5 xl:w-12 xl:h-12"
              type={icon}
              color="tertiary"
            />
          </View>
        )}

        <View className={`flex flex-col gap-4`}>
          <Text className="text-primary font-bold text-lg tracking-0.1 xl:text-xl">
            {title}
          </Text>
          {!!body && (
            <View className="text-neutral-500 text-base leading-5 line-clamp-3 text-ellipsis xl:text-lg xl:leading-6 xl:tracking-0.1">
              {body}
            </View>
          )}
        </View>
      </View>
      {buttonProps && Object.values(buttonProps).every((value) => !!value) && (
        <AtLink {...buttonProps} />
      )}
    </View>
  );
};
