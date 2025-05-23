import Svg, { Path } from "react-native-svg";
import { IconProps } from "../at-icon.types";

export const InfoIcon = ({
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
      <Path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z" />
    </Svg>
  );
};
