import { GridColorPickerProps } from "./ml-color-picker.types";
import { AtColorPicker } from "@mono-repo-demo/atomic-library";
import { capitalizeFirstLetter } from "../../utils";
import { colorNameClasses } from "./ml-color-picker.variants";

export const GridColorPicker = ({
  options,
  onClick,
  selected,
}: GridColorPickerProps) => {
  return;
  // return (
  //   <ul className="flex flex-wrap gap-4" data-testid="grid-color-picker">
  //     {options.map((colorVariant, index) => {
  //       const { colorKey, colorName, isSoldOut, isSelected } = colorVariant;
  //       if (!colorKey || !colorName) return null;
  //       return (
  //         <li
  //           className="w-20 flex flex-col items-center justify-end gap-y-2"
  //           key={colorKey}
  //         >
  //           <AtColorPicker
  //             color={colorKey}
  //             title={colorName}
  //             isSelected={selected === colorKey || isSelected}
  //             onClick={() => onClick?.(index)}
  //             isSoldOut={isSoldOut}
  //           />
  //           <Text className={colorNameClasses({ isSoldOut })}>
  //             {capitalizeFirstLetter(colorName)}
  //           </Text>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};
