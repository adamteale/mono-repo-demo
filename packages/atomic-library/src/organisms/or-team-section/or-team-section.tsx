import { Text, View } from "react-native";
import { MlVerticalTeam } from "../../molecules";
import { OrTeamSectionProps } from "./or-team-section.types";

export const OrTeamSection = ({
  title,
  description,
  teamCards,
}: OrTeamSectionProps) => {
  return (
    <View className="container py-20">
      <View className="flex flex-col text-center gap-6 px-8 pb-16 sm:pb-20 md:px-28 lg:px-32">
        <Text className="text-primary text-xl font-bold leading-7 sm:text-2xl sm:leading-6 md:leading-10">
          {title}
        </Text>
        <Text className="text-primary text-lg sm:text-lgx leading-6 tracking-0.1">
          {description}
        </Text>
      </View>
      <View
        className="flex flex-row flex-wrap justify-center sm:justify-between md:justify-start lg:justify-center gap-y-8 sm:gap-y-10 md:gap-x-12 lg:gap-x-6 lg:gap-y-12 xl:gap-12 2xl:gap-16 3xl:gap-y-12"
        data-testid="ml-vertical-team-container"
      >
        {teamCards.map((teamCard, idx) => (
          <MlVerticalTeam key={idx} {...teamCard} className="w-[17.5rem]" />
        ))}
      </View>
    </View>
  );
};
