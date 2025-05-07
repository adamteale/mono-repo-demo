import React from "react";
import { View } from "react-native";

export const MlProductCardSkeleton = () => (
  <View
    className="rounded-2xl border animate-pulse bg-original-50"
    data-testid="product-card-skeleton"
  >
    <View className="flex flex-col gap-y-5 p-5 animate-pulse md:p-6">
      <View className="flex flex-col gap-y-5">
        <View
          className={`w-full aspect-square rounded-2xl animate-pulse bg-original-100`}
        />
        <View className="flex flex-col gap-y-2">
          <View className="flex flex-col gap-y-3">
            <View className="rounded h-4 w-16 bg-original-100" />
            <View className="rounded h-[1.125rem] bg-original-100" />
          </View>
          <View className="flex flex-col gap-y-5">
            <View className="rounded h-4 bg-original-100" />
            <View className="rounded h-9 w-[12.5rem] bg-original-100" />
          </View>
        </View>
      </View>
      <View className="h-12 w-full rounded-lg animate-pulse bg-original-100 md:h-14" />
    </View>
  </View>
);
