import { AtButtonVariants, AtLink } from "../../atoms";
import { buttonVariants } from "../../atoms/at-button/at-button.variants";
import { MlMedia, MlMediaFit } from "../ml-media";
import { MlCardProps } from "./ml-card.types";

export const MlCard = ({
  label,
  linkProps,
  image,
  className = "",
}: MlCardProps) => {
  const buttonClasses = buttonVariants()({
    variant: AtButtonVariants.QUARTENARY,
  });

  return (
    <AtLink
      className={`flex flex-col overflow-hidden justify-end relative bg-cover bg-no-repeat rounded-xl h-[13.75rem] sm:h-[21.875rem] md:h-[25.5rem] p-4 ${className}`}
      {...linkProps}
    >
      {image && (
        <MlMedia
          {...image}
          asBackground
          fit={MlMediaFit.COVER}
          wrapperClassName="absolute top-0 left-0"
        />
      )}

      <View className="hover:bg-black hover:bg-opacity-10 active:bg-opacity-30 absolute top-0 left-0 w-full h-full rounded-xl transition-colors" />
      {/* This is a fake button for accessibility reasons */}
      <View className={`relative z-10 xl:text-nowrap ${buttonClasses}`}>
        {label}
      </View>
    </AtLink>
  );
};
