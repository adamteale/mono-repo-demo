import { OrImageInteractiveBlockProps } from "./or-image-interactive-block.types";
import { MlImageInteractive } from "../../molecules";
import { OrImagesCarousel } from "../or-images-carousel";

export const OrImageInteractiveBlock = ({
  body,
  images,
  subtitle,
}: OrImageInteractiveBlockProps) => {
  return (
    <View className="flex flex-col gap-8 pb-8 md:py-10 xl:py-12 md:flex-row xl:gap-12">
      {/* Mobile */}
      <View className="block md:hidden">
        <OrImagesCarousel
          images={images.map((image) => ({
            ...image,
            className: "aspect-[75/67] sm:aspect-[16/15]",
          }))}
        />
      </View>

      {/* Tablet - Desktop */}
      <View className="hidden md:flex flex-col gap-10 lg:gap-12 xl:w-1/2">
        {images?.map((imageProps, idx) => (
          <MlImageInteractive
            key={idx}
            {...imageProps}
            ariaLabel={imageProps.image.alt}
            className="md:w-110 lg:w-112 xl:w-full xl:max-w-126 aspect-square"
            dataTestId={`carousel-image-${idx}`}
          />
        ))}
      </View>

      <View className="flex flex-col gap-6 h-fit sticky top-4 w-fit xl:w-1/2">
        <Text className="font-bold text-lgx text-primary md:text-xl">
          {subtitle}
        </Text>
        <View className="text-primary text-lg leading-8 md:leading-[2.375rem] xl:leading-[2.625rem] tracking-wide  xl:text-lgx">
          {body}
        </View>
      </View>
    </View>
  );
};
