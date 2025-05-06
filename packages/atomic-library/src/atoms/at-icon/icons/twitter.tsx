import { IconProps } from "../at-icon.types";

export const TwitterIcon = ({
  className,
  fill,
  size = 24,
  dataTestId,
  ariaHidden,
}: IconProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`${className} ${fill}`}
      data-testid={dataTestId}
      aria-hidden={ariaHidden}
    >
      <Path d="M17.7512 3H20.818L14.1179 10.3668L22 20.3913H15.8284L10.9946 14.3115L5.46359 20.3913H2.39494L9.5613 12.5117L2 3H8.32828L12.6976 8.55719L17.7512 3ZM16.6748 18.6254H18.3742L7.4049 4.67313H5.58133L16.6748 18.6254Z" />
    </Svg>
  );
};
