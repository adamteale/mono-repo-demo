import { MlMedia } from "../../../../molecules";
import {
  OrHeroBannerProps,
  OrHeroBannerVariant,
} from "../../or-hero-banner.types";

type BannerImageProps = Pick<OrHeroBannerProps, "image" | "variant">;

export const BannerImage = ({ image, variant }: BannerImageProps) =>
  variant === OrHeroBannerVariant.IMAGE_BANNER ? (
    <MlMedia
      {...image}
      wrapperClassName="absolute h-[41.75rem] md:h-[47.375rem]"
      asBackground
    />
  ) : null;
