import { AtLinkProps } from "../../atoms";

export interface SubItem extends Omit<Item, "children"> {}

export interface Item {
  label: string;
  linkProps?: Pick<AtLinkProps, "href" | "linkWrapper">;
  children?: SubItem[];
}

export interface MlDropDownMenuItemProps {
  /** An optional property that specifies the ID of the element that labels the dropdown menu item for accessibility purposes. */
  ariaLabelledBy?: string;

  /** An optional property to apply custom CSS classes to the dropdown menu item for styling. */
  className?: string;

  /** An optional property used for testing purposes to identify the dropdown menu item in tests. */
  dataTestId?: string;

  /** An optional property that specifies the ID of the dropdown menu item for identification purposes. */
  id?: string;

  /** A boolean property that determines whether the dropdown menu item label should be in lowercase. */
  isLowerCase?: boolean;

  /** A required property that defines an array of items to be displayed within the dropdown. */
  items: Item[];

  /** A required property that specifies the text label of the dropdown menu item. */
  label: string;

  /** An optional callback function that is triggered when the dropdown menu item is clicked, receiving a boolean value as an argument. */
  onClick?: (value: boolean) => void;
}
