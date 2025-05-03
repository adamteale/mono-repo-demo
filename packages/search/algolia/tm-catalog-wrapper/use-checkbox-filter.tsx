import { Color, colorMappingNames } from "@mono-repo-demo/atomic-library";
import { useRefinementList } from "react-instantsearch";

type CheckBoxFilter = {
  key: string;
  title: string;
  type: "list" | "color" | "size";
  initiallyOpen: boolean;
  sizes?: {
    text: string;
    isSoldOut: boolean;
    value: string;
    selected: boolean;
  }[];
  colorVariations?: {
    isSoldOut: boolean;
    colorKey: Color;
    colorName: string;
  }[];
  options?: {
    label: string;
    value: string;
    quantity: number;
    selected: boolean;
  }[];
};

/**
 * This titles should come from CMS
 */
const mappedTitles = {
  categories: "Categories",
  "variants.size": "Size",
  "variants.color.key": "Color",
  "variants.brand": "Brands",
  "variants.price.amount": "Price",
};

export const useCheckboxFilter = (attribute: string, type = "list") => {
  const { items, refine } = useRefinementList({ attribute, sortBy: ["name"] });

  let extraOptions = {};

  if (type === "size") {
    extraOptions = {
      sizes: items.map((item) => ({
        text: item.label,
        isSoldOut: item.count === 0,
        value: item.value,
        isSelected: item.isRefined,
      })),
    };
  } else if (type === "color") {
    extraOptions = {
      colorVariations: items.map((item) => ({
        isSoldOut: item.count === 0,
        colorKey: item.label as Color,
        isSelected: item.isRefined,
        colorName:
          // colorNamesMapping?.[key as keyof typeof colorNamesMapping] ??
          colorMappingNames[item.label as keyof typeof colorMappingNames],
      })),
    };
  } else {
    extraOptions = {
      options: items.map((item) => ({
        label: item.label,
        value: item.value,
        quantity: item.count,
        selected: item.isRefined,
      })),
    };
  }

  const filter: CheckBoxFilter = {
    key: attribute,
    title: mappedTitles[attribute as keyof typeof mappedTitles] ?? attribute,
    type: type as CheckBoxFilter["type"],
    initiallyOpen: false,
    ...extraOptions,
  };

  return [filter, refine] as const;
};
