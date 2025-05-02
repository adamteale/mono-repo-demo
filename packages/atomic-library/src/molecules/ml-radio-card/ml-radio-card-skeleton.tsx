import { MlRadioCardSkeletonProps } from "./ml-radio-card.types";

export const MlRadioCardSkeleton = ({
  checked = false,
  dataTestId,
}: MlRadioCardSkeletonProps) => {
  const selectedIndicatorClass = `absolute top-0.3 left-0.3 h-2.25 w-2.25 bg-quaternary rounded-full ${
    checked ? "block" : "hidden"
  }`;

  return (
    <View className="flex max-w-[37.375rem] flex-col justify-center animate-pulse">
      <View className="flex items-start justify-between px-4 py-6 bg-tertiary rounded-lg border border-secondary">
        <View className="flex items-start">
          <label className="inline-flex flex-col">
            <View className="flex items-center">
              <input
                type="radio"
                checked={checked}
                disabled={true}
                data-testid={dataTestId ?? "ml-radio-card-skeleton"}
                className="hidden"
              />

              <View className="flex justify-center items-center h-[1.125rem] w-[1.125rem]">
                <Text className="h-[0.9375rem] w-[0.9375rem] border-[0.75px] border-primary rounded-full relative flex justify-center items-center">
                  <Text className={selectedIndicatorClass} />
                </Text>
              </View>

              <Text className="ml-2 text-primary text-sm mb-2">
                <View className="rounded bg-surface-secondary h-4 w-32" />
              </Text>
            </View>

            <Text className="ml-[1.625rem] text-quaternary text-sm">
              <View className="rounded bg-surface-secondary h-4 w-32" />
            </Text>
          </label>
        </View>
        <Text className="font-bold text-sm text-primary opacity-50">
          <View className="rounded bg-surface-secondary h-4 w-8" />
        </Text>
      </View>
    </View>
  );
};
