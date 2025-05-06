import { Text } from "react-native";
import { AtLink, IconType } from "../../atoms";
import { AtIcon } from "../../atoms/at-icon/at-icon";
import { MlMenuItemProps } from "./ml-menu-item.types";
import { mlMenuItemVariants } from "./ml-menu-item.variants";

const DATA_TEST_ID = "ml-menu-item";
const ICON_DATA_TEST_ID = "ml-menu-item-icon";

export const MlMenuItem = ({
  className = "",
  dataTestId = DATA_TEST_ID,
  isLink = true,
  label,
  linkProps,
  showIcon = false,
  size = "medium",
  onClick,
  isOpen = false,
  role,
  ariaControls,
  labelClassName = "font-normal active:font-bold",
}: MlMenuItemProps) => {
  const MenuItem =
    isLink && linkProps?.href ? AtLink : !!onClick ? "button" : "span";
  const iconType: IconType = isOpen ? "angle-up" : "angle-down";

  const ariaProps =
    showIcon && MenuItem !== "span"
      ? {
          "aria-haspopup": true,
          "aria-expanded": isOpen,
        }
      : {};

  const handleOnClick = () => {
    if (onClick) onClick(!isOpen);
  };

  return (
    <MenuItem
      aria-controls={ariaControls}
      {...ariaProps}
      className={`
      ${mlMenuItemVariants({
        variant: size,
      })}
      ${MenuItem !== "span" ? "cursor-pointer " : "hover:after:hidden"}
      ${className}
      `}
      onClick={handleOnClick}
      {...(isLink ? linkProps : {})}
      {...(MenuItem !== "button" && MenuItem !== "span"
        ? { dataTestId: dataTestId }
        : { "data-testid": dataTestId })}
      role={role}
    >
      <Text className={labelClassName}>{label}</Text>
      {showIcon && (
        <AtIcon
          dataTestId={ICON_DATA_TEST_ID}
          color={isOpen ? "secondary" : "primary"}
          type={iconType}
          className="transition-all"
        />
      )}
    </MenuItem>
  );
};
