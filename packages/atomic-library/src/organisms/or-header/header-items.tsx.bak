import { HeaderMenuItem } from "./or-header.types";
import { MlMenuItem } from "../../molecules";
import { HeaderSubItems } from "./header.sub-items";
import { menuItemClasses } from "./or-header.variants";
import { View } from "react-native";

interface HeaderItemsProps {
  menuItems?: HeaderMenuItem[];
  isDesktop?: boolean;
  className?: string;
  handleCloseMenu?: () => void;
  activeItem: number;
  setActiveItem: (index: number) => void;
}

export const HeaderItems = ({
  menuItems,
  activeItem,
  setActiveItem,
  className = "",
  isDesktop = true,
  handleCloseMenu,
}: HeaderItemsProps) => {
  if (!menuItems) return null;

  const handleItemClick = (index: number) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    <View aria-label="Global Navigation" className={`${className}`}>
      {menuItems.map((item, idx) => {
        const isMenuOpen = activeItem === idx;
        let onClick;
        let showIcon = false;
        let linkProps = item.linkProps;

        if (!!item.children) {
          onClick = () => handleItemClick(idx);
          showIcon = true;
          linkProps = undefined;
        } else if (!!linkProps?.href) {
          onClick = handleCloseMenu;
        }

        return (
          <View key={`header-item-${idx}`}>
            <MlMenuItem
              className={menuItemClasses({
                isMenuOpenDesktop: isMenuOpen && isDesktop,
                isIndexZero: idx === 0,
              })}
              label={item.label}
              labelClassName="font-bold xl:font-normal"
              linkProps={linkProps}
              onClick={onClick}
              showIcon={isDesktop ? false : showIcon}
              isOpen={isMenuOpen}
              ariaControls={`header-subitem-${idx}`}
              size="medium"
            />
            <HeaderSubItems
              isActive={isMenuOpen}
              items={item.children}
              handleCloseMenu={handleCloseMenu}
            />
          </View>
        );
      })}
    </View>
  );
};
