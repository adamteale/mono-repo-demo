import { AtDivider, AtLink } from "../../atoms";
import {
  MlDropdown,
  MlDropdownDividerPosition,
} from "../../molecules/ml-dropdown";
import { OrSidebarMenuProps } from "./or-sidebar-menu.types";
import {
  desktopLinkClasses,
  mobileLinkClasses,
} from "./or-sidebar-menu.variants";

export const OrSidebarMenu = ({
  menuItems,
  title,
  className = "",
}: OrSidebarMenuProps) => {
  return (
    <View
      className={`w-full max-w-[14.75rem] xl:max-w-[16.25rem] xl:min-w-[13.75rem]  ${className}`}
    >
      {/*Desktop*/}
      <View
        className="w-full hidden xl:block"
        data-testid="sidebar-menu-desktop-container"
      >
        <Text className="text-lg text-primary">{title}</Text>
        <AtDivider className="mt-2 mb-6 !border-secondary" />
        <ul className="flex flex-col gap-6">
          {menuItems.map((menuItem, idx) => (
            <li key={`desktop-sidebar-menu-item-${idx}`}>
              <AtLink
                {...menuItem}
                className={`${menuItem.className} ${desktopLinkClasses({
                  menuItemActive: menuItem.isActive,
                })}`}
              />
            </li>
          ))}
        </ul>
      </View>

      {/*Tablet - Mobile*/}
      <View className="w-full block xl:hidden">
        <MlDropdown
          title={title}
          hasBackground={false}
          childrenContainerClassName="mt-3 md:mt-5 !pt-0"
          summaryTextClassName="pt-0 !pb-0 !text-base md:!text-lg items-center w-full h-9 md:border-b md:border-secondary"
          dataTestId="sidebar-menu-dropdown"
          divider={true}
          dividerPosition={MlDropdownDividerPosition.BOTTOM}
          dividerClassName="block md:hidden w-full"
          iconClassName="!text-neutral"
        >
          <ul className="flex flex-col gap-6 md:pb-0">
            {menuItems.map((menuItem, idx) => (
              <li key={`sidebar-menu-item-${idx}`}>
                <AtLink
                  {...menuItem}
                  className={`${menuItem.className} ${mobileLinkClasses({
                    menuItemActive: menuItem.isActive,
                  })}`}
                />
              </li>
            ))}
          </ul>
        </MlDropdown>
      </View>
    </View>
  );
};
