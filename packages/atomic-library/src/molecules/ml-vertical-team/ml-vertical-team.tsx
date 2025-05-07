import { Text, View } from "react-native";
import { MlMedia } from "../ml-media";
import { MlVerticalTeamProps } from "./ml-vertical-team.types";

export const MlVerticalTeam = ({
  image,
  teamName,
  role,
  roleDescription,
  className,
}: MlVerticalTeamProps) => {
  return (
    <View
      className={`flex flex-col p-4 gap-6 max-w-[24.68rem] rounded-xl ${className}`}
    >
      {image && (
        <View>
          <MlMedia
            {...image}
            wrapperClassName="!h-60 w-full [&>img]:rounded-xl"
          />
        </View>
      )}
      <View className="gap-3 text-primary flex flex-col">
        <Text className="text-lg font-bold md:text-lgx break-words overflow-wrap md:tracking-0.1">
          {teamName}
        </Text>
        <Text className="font-medium leading-4 md:text-lg break-words overflow-wrap md:tracking-0.1">
          {role}
        </Text>
      </View>
      <Text className="text-neutral-500 leading-5 break-words overflow-wrap md:leading-6 md:text-lg md:tracking-0.1">
        {roleDescription}
      </Text>
    </View>
  );
};
