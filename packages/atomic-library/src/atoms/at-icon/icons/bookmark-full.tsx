import Svg, { Path } from "react-native-svg";
import { IconProps } from "../at-icon.types";

export const BookmarkFullIcon = ({
  className,
  fill,
  size = 24,
  dataTestId,
  ariaHidden,
}: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`${className} ${fill}`}
      data-testid={dataTestId}
    >
      <Path d="M11 0H3C1.3 0 0 1.3 0 3V19C0 19.2 -9.68575e-08 19.3 0.0999999 19.5C0.4 20 1 20.1 1.5 19.9L7 16.7L12.5 19.9C12.7 20 12.8 20 13 20C13.6 20 14 19.6 14 19V3C14 1.3 12.7 0 11 0Z" />
    </Svg>
  );
};
