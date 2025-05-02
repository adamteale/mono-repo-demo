import { MlMedia } from "../../molecules";
import {
  OrImageBlockProps,
  OrImageBlockLayoutVariants,
} from "./or-image-block.types";
import {
  containerClasses,
  firstImageContainerClasses,
  imagesContainerClasses,
  imagesWrapperClasses,
  textContainerClasses,
} from "./or-image-block.variants";

export const OrImageBlock = ({
  body,
  images,
  title,
  isInverted,
  isVertical,
  pretitle,
  subtitle,
  supportText,
}: OrImageBlockProps) => {
  const parseIsVertical = images.length >= 3 ? isVertical : false;

  const getLayout = () => {
    if (!images || !images.length) return;

    switch (images.length) {
      case 1:
        return OrImageBlockLayoutVariants.SINGLE;
      case 2:
        return OrImageBlockLayoutVariants.DOUBLE;
      case 3:
        return OrImageBlockLayoutVariants.TRIPLE;
      default:
        return OrImageBlockLayoutVariants.TRIPLE;
    }
  };

  return (
    <View className="flex flex-col gap-8 md:gap-10 xl:gap-12 py-8 md:py-10 xl:py-12">
      <View className="flex flex-col">
        <Text className="pb-3 text-lg md:text-lgx font-bold text-neutral-500 tracking-wide">
          {pretitle}
        </Text>
        <Text className="pb-6 text-xl md:text-2xl font-bold text-primary tracking-wide">
          {title}
        </Text>
        <Text className="text-lg md:text-lgx leading-6 text-neutral-500">
          {supportText}
        </Text>
      </View>
      <View className="flex flex-col lg:flex-row gap-8 xl:gap-12 h-full">
        <View
          className={containerClasses({
            layout: getLayout(),
            vertical: parseIsVertical,
            inverted: isInverted,
          })}
        >
          {images.length && (
            <>
              <View
                className={firstImageContainerClasses({
                  vertical: parseIsVertical,
                  layout: getLayout(),
                })}
              >
                <MlMedia {...images[0]} />
              </View>

              <View
                className={imagesContainerClasses({
                  vertical: parseIsVertical,
                })}
              >
                {images.slice(1).map((image, idx) => (
                  <View
                    key={idx}
                    className={imagesWrapperClasses({
                      vertical: parseIsVertical,
                      layout: getLayout(),
                    })}
                  >
                    <MlMedia {...image} />
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
        <View
          className={textContainerClasses({
            vertical: parseIsVertical,
            layout: getLayout(),
          })}
        >
          <Text className="text-primary text-lgx md:text-xl font-bold tracking-wide">
            {subtitle}
          </Text>
          <View className="text-primary text-lg leading-8 tracking-wide xl:text-lgx xl:leading-[2.625rem]">
            {body}
          </View>
        </View>
      </View>
    </View>
  );
};
