import Svg, { Path } from "react-native-svg";
import { IconProps } from "../at-icon.types";

export const PlayIcon = ({
  className,
  fill,
  size = 76,
  dataTestId,
  ariaHidden,
}: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 76 76"
      className={`${className} ${fill}`}
      data-testid={dataTestId}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M63.3492 38C63.3492 52 52 63.3492 38 63.3492C24.0063 63.3341 12.666 51.9937 12.6508 38C12.6508 24.0001 24.0001 12.6509 38 12.6509C52 12.6509 63.3492 24.0001 63.3492 38ZM46.925 40.7969C47.6423 40.508 48.1263 39.8286 48.165 39.0563C48.1271 38.2832 47.643 37.6027 46.925 37.3135L34.0709 30.8854C33.409 30.4813 32.5762 30.4837 31.9166 30.8916C31.2571 31.2994 30.8829 32.0435 30.9487 32.8161V45.2922C30.9101 46.0597 31.2785 46.7908 31.9183 47.2166C32.2282 47.407 32.5854 47.5066 32.9492 47.5039C33.3399 47.499 33.724 47.4028 34.0709 47.2229L46.925 40.7969Z"
      />
    </Svg>
  );
};
