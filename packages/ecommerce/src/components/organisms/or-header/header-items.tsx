import { MlMenuItem } from "@mono-repo-demo/atomic-library";
import { HeaderMenuItem } from "./or-header.types";
import { HeaderSubItems } from "./header.sub-items";
import { menuItemClasses, menuItemLabelClasses } from "./or-header.variants";

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
    <nav aria-label="Global Navigation" className={`${className}`}>
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
                isDesktopMenuOpen: isMenuOpen && isDesktop,
                isFirstItem: idx === 0,
              })}
              label={item.label}
              labelClassName={menuItemLabelClasses({ isDesktop, isMenuOpen })}
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
    </nav>
  );
};
