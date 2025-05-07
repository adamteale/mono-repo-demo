import { forwardRef, useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

import { AtCheckbox, AtIcon } from "../../atoms";
import {
  ListFilterWrapperProps,
  ListItemProps,
} from "./list-filter/list-filter.types";

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ onClick, label, selected, quantity, displayQuantity }, ref) => (
    <li className="flex justify-between items-center" ref={ref} tabIndex={0}>
      <AtCheckbox onClick={onClick} label={label} checked={selected} />
      {displayQuantity && <Text className="text-primary">({quantity})</Text>}
    </li>
  )
);

ListItem.displayName = "ListItem";

export const ListFilterWrapper = ({
  seeAllLabel = "See all",
  seeLessLabel = "See less",
  sliceAmount = 5,
  searchComponent,
  options = [],
  onClick,
}: ListFilterWrapperProps) => {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const firstItemRef = useRef<HTMLLIElement | null>(null);

  const list = isListExpanded ? options : options.slice(0, sliceAmount);

  useEffect(() => {
    if (isListExpanded && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [isListExpanded]);

  return (
    <View className="flex flex-col gap-6">
      {searchComponent}
      {list.length ? (
        <ul className="flex flex-col gap-6">
          {list.map((item, index) => (
            <ListItem
              key={index}
              ref={index === 0 ? firstItemRef : null}
              onClick={() => onClick(index)}
              label={item.label}
              selected={item.selected}
              quantity={item.quantity}
              displayQuantity={item.displayQuantity}
            />
          ))}
        </ul>
      ) : null}
      {options.length > sliceAmount && (
        <button
          className="flex items-center
            text-link-hover underline underline-offset-2 decoration-2
            active:font-medium active:text-link-pressed"
          onClick={(e) => {
            e.preventDefault();
            setIsListExpanded((expanded) => !expanded);
          }}
        >
          <AtIcon
            color="currentColor"
            className="mr-1"
            type={isListExpanded ? "less" : "plus"}
          />
          <Text>{isListExpanded ? seeLessLabel : seeAllLabel}</Text>
        </button>
      )}
    </View>
  );
};

export const validListRangeValues = /^[0-9]*\.?[0-9]+$/;
