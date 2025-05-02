export const MlCardBlogSkeleton = () => (
  <View
    className="rounded-2xl border animate-pulse bg-original-50"
    data-testid="card-blog-skeleton"
  >
    <View className="flex flex-col gap-y-5 p-4 animate-pulse">
      <View className="flex flex-col gap-y-5">
        <View
          className={`w-full aspect-square rounded-2xl animate-pulse bg-original-100`}
        />
        <View className="flex flex-col gap-y-4">
          <View className="flex justify-between">
            <View className="rounded h-4 xl:h-5 w-20 bg-original-100" />
            <View className="rounded h-4 xl:h-5 w-24 bg-original-100" />
          </View>
          <View className="flex flex-col gap-y-1">
            <View className="rounded h-[1.125rem] xl:h-6 bg-original-100" />
            <View className="rounded h-[1.125rem] xl:h-6 w-1/2 bg-original-100" />
          </View>
          <View className="flex flex-col gap-y-1">
            <View className="rounded h-[0.9rem] xl:h-5 bg-original-100" />
            <View className="rounded h-[0.9rem] xl:h-5 bg-original-100" />
            <View className="rounded h-[0.9rem] xl:h-5 w-1/4 bg-original-100" />
          </View>
        </View>
        <View className="rounded h-6 w-[6.5rem] bg-original-100" />
      </View>
    </View>
  </View>
);
