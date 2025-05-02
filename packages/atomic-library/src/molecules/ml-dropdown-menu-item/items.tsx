import { MlMenuItem } from "../ml-menu-item";
import { Item } from "./ml-dropdown-menu-item.types";
import {
  itemListClasses,
  itemsContainerClasses,
} from "./ml-dropdown-menu-item.variants";

export interface ItemProps {
  ariaLabelledBy?: string;
  isActive?: boolean;
  items?: Item[] | undefined;
  handleCloseMenu?: () => void;
  isOpen: boolean;
}

export const Items = ({
  ariaLabelledBy,
  items,
  isOpen,
  handleCloseMenu,
}: ItemProps) => {
  return (
    <View
      data-testid="dropdown-menu-item-box"
      className={itemsContainerClasses({ open: isOpen })}
      role="menu"
    >
      {items?.map((item, idx) => (
        <ul
          data-testid="dropdown-menu-item-list"
          className={itemListClasses({ hasChildren: !!item.children })}
          key={`dropdown-menu-item-${idx}`}
          aria-labelledby={ariaLabelledBy}
        >
          <li>
            <MlMenuItem
              className="hover:after:hidden"
              role="itemlistbox"
              labelClassName="text-base font-bold"
              label={item.label}
              showIcon={false}
              linkProps={item.linkProps}
              isOpen={isOpen}
              onClick={() => {
                if (handleCloseMenu) {
                  handleCloseMenu();
                }
              }}
            />
          </li>
          {item.children && (
            <ul
              data-testid="dropdown-menu-subitem-list"
              className="flex flex-col gap-y-3"
            >
              {item.children?.map((subItem, index) => (
                <li key={`dropdown-menu-subitem-${index}`}>
                  <MlMenuItem
                    className="hover:after:hidden active:font-normal"
                    labelClassName="text-base leading-5"
                    role="subitemlistbox"
                    label={subItem.label ?? ""}
                    linkProps={subItem.linkProps}
                    showIcon={false}
                    isOpen={isOpen}
                    onClick={() => {
                      if (handleCloseMenu) {
                        handleCloseMenu();
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
        </ul>
      ))}
    </View>
  );
};
