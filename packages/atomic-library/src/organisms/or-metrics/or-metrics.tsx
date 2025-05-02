import { Text, View } from "react-native";
import { MlMedia } from "../../molecules";
import { OrMetricsContentAlignment, OrMetricsProps } from "./or-metrics.types";
import {
  metricContainerClasses,
  metricsAndImageContainerClasses,
} from "./or-metrics.variants";

export const OrMetrics = ({
  title,
  description,
  image,
  metricArray,
  align = OrMetricsContentAlignment.RIGHT,
}: OrMetricsProps) => {
  const getGridClass = (length: number) => {
    switch (length) {
      case 1:
        return "grid-cols-1 place-items-center";
      case 2:
      case 3:
        return "grid-cols-2 place-items-center";
      default:
        return "grid-cols-2";
    }
  };

  return (
    <View className="container py-12 sm:py-16 md:py-24 flex flex-col gap-16 lg:gap-20 text-primary">
      {(title || description) && (
        <View className="flex flex-col gap-6 sm:gap-8">
          {title && (
            <Text className="font-bold text-lg leading-5 tracking-0.1 sm:text-xl sm:leading-7 md:text-2xl md:leading-10">
              {title}
            </Text>
          )}

          {description && (
            <Text className="text-neutral-500 font-normal text-sm leading-4 sm:tracking-0.1 sm:text-lg sm:leading-6 md:text-lgx lg:text-lg lg:leading-6 xl:text-lgx">
              {description}
            </Text>
          )}
        </View>
      )}

      <View
        className={metricsAndImageContainerClasses({ contentAlignment: align })}
      >
        {image && (
          <MlMedia
            wrapperClassName="rounded-xl overflow-hidden max-lg:w-full object-cover h-[263.5px] sm:h-[351px] md:h-[372px] lg:max-w-[392px] lg:min-h-[372px] xl:min-w-[556px] xl:min-h-[527px] 3xl:min-w-[720px] 3xl:min-h-[682px]"
            {...image}
          />
        )}

        <View
          className={`w-full grid ${getGridClass(
            metricArray.length
          )} gap-x-8 gap-y-16 2xl:gap-x-16`}
        >
          {metricArray.map((metric, index) => {
            if (index <= 3) {
              return (
                <View
                  key={`metric-item-${index}`}
                  className={metricContainerClasses({
                    isArrayLengthThree: metricArray.length === 3,
                    isIndexTwo: index === 2,
                  })}
                >
                  <Text className="font-bold text-2xl leading-10 tracking-[0.1] md:text-3xl md:leading-[60px] 3xl:text-[68px] 3xl:leading-[99px]">
                    {metric.value}
                  </Text>

                  <View className="flex flex-col gap-2 items-center lg:items-start">
                    <Text className="font-bold text-sm leading-4 sm:tracking-[0.1] sm:text-lg sm:leading-5 md:text-lgx md:leading-6 lg:text-lg lg:leading-5">
                      {metric.title}
                    </Text>

                    {metric.description && (
                      <Text className="text-neutral-500 font-normal sm:tracking-[0.1] text-sm leading-4 sm:text-lg sm:leading-6 md:text-lgx lg:text-lg lg:leading-6">
                        {metric.description}
                      </Text>
                    )}
                  </View>
                </View>
              );
            }
          })}
        </View>
      </View>
    </View>
  );
};
