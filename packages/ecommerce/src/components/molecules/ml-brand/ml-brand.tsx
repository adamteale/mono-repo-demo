import { AtLink, MlMedia, MlMediaFit } from "@mono-repo-demo/atomic-library";
import { MlBrandProps } from "./ml-brand.types";
import { mlBrandClasses } from "./ml-brand.variants";

export const MlBrand = ({
  link,
  image,
  className = "",
  dataTestId = "ml-brand",
}: MlBrandProps) => {
  const hasLink = link?.href;
  return (
    <View
      data-testid={dataTestId}
      className={`${mlBrandClasses({ link: !!hasLink })} ${className}`}
    >
      {hasLink ? (
        <AtLink {...link} className="w-full h-full p-6">
          <MlMedia
            {...image}
            asBackground
            fit={MlMediaFit.CONTAIN}
            wrapperClassName="object-contain w-full h-full"
          />
        </AtLink>
      ) : (
        <View className="w-full h-full p-6">
          <MlMedia
            {...image}
            asBackground
            fit={MlMediaFit.CONTAIN}
            wrapperClassName="object-contain w-full h-full"
          />
        </View>
      )}
    </View>
  );
};
