import { View } from "react-native";
import { MlMedia } from "../../../../molecules";
import { OrHeroBannerProps } from "../../or-hero-banner.types";
import { BannerAuthor } from "../BannerAuthor/BannerAuthor";

export type BannerSplitImageProps = Pick<OrHeroBannerProps, "image" | "author">;

export const BannerSplitImage = ({ image, author }: BannerSplitImageProps) =>
  image ? (
    <View className="relative w-full xl:w-1/2 h-[27.625rem] sm:h-[28.875rem] md:h-[37.125rem] lg:h-[38.625rem] xl:h-[47.375rem]">
      <MlMedia {...image} />
      <BannerAuthor author={author} />
    </View>
  ) : null;
