import { useState } from "react";
import { MlMenuItem } from "../ml-menu-item";
import { MlDropDownMenuItemProps } from "./ml-dropdown-menu-item.types";
import { Items } from "./items";

export const MlDropDownMenuItem = ({
  ariaLabelledBy = "",
  className = "",
  dataTestId = "dropdown-menu-item",
  id = "dropdown-menu-item",
  items,
  label,
  onClick,
}: MlDropDownMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!items) return null;

  const handleOnClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(!isOpen);
  };

  return (
    <View
      className={`${className} bg-surface-primary flex flex-col gap-y-5 overflow-hidden`}
      data-testid={dataTestId}
    >
      <MlMenuItem
        className="pb-2 border-b border-secondary hover:after:hidden active:font-normal"
        key={id}
        showIcon
        isLink={false}
        label={label}
        dataTestId="dropdown-menu-item-label"
        isOpen={isOpen}
        labelClassName="uppercase leading-6 tracking-[0.4px] text-lg"
        onClick={handleOnClick}
        role="menuitem"
      />
      <Items
        ariaLabelledBy={ariaLabelledBy}
        isOpen={isOpen}
        items={items}
        handleCloseMenu={() => setIsOpen(false)}
      />
    </View>
  );
};
