import {
  PRODUCT_VARIATIONS_KEY,
  VariantAttribute,
} from "../../../components/types";

interface AttributeProperties {
  sizeName?: string;
  colorKey?: string;
  careInstructions?: string;
  materialInfo?: string;
}

export const getAttributeProperties = (
  attributes: VariantAttribute[] | undefined,
  attributeName: string
): AttributeProperties => {
  const attribute = attributes?.find((att) => att?.name === attributeName);
  if (attribute) {
    switch (attributeName) {
      case PRODUCT_VARIATIONS_KEY.SIZE: {
        return {
          sizeName:
            attribute &&
            !Array.isArray(attribute.value) &&
            typeof attribute.value === "object" &&
            "label" in attribute.value
              ? attribute?.value?.label
              : typeof attribute?.value === "string"
              ? attribute?.value
              : undefined,
        };
      }
      case PRODUCT_VARIATIONS_KEY.COLOR: {
        const colorValue: string =
          attribute &&
          !Array.isArray(attribute.value) &&
          typeof attribute?.value === "object" &&
          "key" in attribute?.value
            ? attribute?.value?.key ?? ""
            : "";
        return { colorKey: colorValue };
      }
      case PRODUCT_VARIATIONS_KEY.MATERIALS:
        return {
          materialInfo:
            typeof attribute?.value === "string" ? attribute?.value : undefined,
        };
      case PRODUCT_VARIATIONS_KEY.CARE:
        return {
          careInstructions:
            typeof attribute?.value === "string" ? attribute?.value : undefined,
        };
    }
  }
  return {};
};
