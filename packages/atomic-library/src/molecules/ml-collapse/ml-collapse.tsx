import { useCallback, useState } from "react";
import { MlDropdown, MlDropdownDividerPosition } from "../ml-dropdown";
import { MlCollapseProps } from "./ml-collapse.types";

export const MlCollapse = ({
  hasBackgroundColor = false,
  showDivider = true,
  initiallyOpenIndex = -1,
  dividerPosition = MlDropdownDividerPosition.BOTTOM,
  dropdownArray,
}: MlCollapseProps) => {
  const [openIndex, setOpenIndex] = useState(initiallyOpenIndex);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? -1 : index));
  }, []);

  return (
    <>
      <View>
        {dropdownArray.map((dropdownProps, index) => {
          return (
            <MlDropdown
              key={`ml-collapse-dropdown-${index}`}
              hasBackground={hasBackgroundColor}
              divider={showDivider}
              dividerPosition={dividerPosition}
              dividerClassName={"!border-secondary"}
              isOpen={index === openIndex}
              onToggle={() => handleToggle(index)}
              {...dropdownProps}
            />
          );
        })}
      </View>
    </>
  );
};
