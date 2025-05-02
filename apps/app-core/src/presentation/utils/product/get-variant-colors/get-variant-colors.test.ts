import { describe, expect, it } from "vitest";
import { productMock } from "../../../test/fixtures/product";
import { getVariantColors } from "./get-variant-colors";
import { ProductVariant } from "../../../types";
import { colorMappingNames } from "@mono-repo-demo/atomic-library";

describe("utils/product/get-variant-colors", () => {
  it("should return mapped color object", () => {
    const [variant1, variant2] = productMock.variants;
    const whiteColorAttribute = {
      name: "color",
      value: {
        key: "white",
        label: "White",
      },
    };
    const redColorAttribute = {
      name: "color",
      value: {
        key: "red",
        label: "Red",
      },
    };
    const modifiedVariant1: ProductVariant = {
      ...variant1,
      attributes: [whiteColorAttribute],
    };
    const modifiedVariant2: ProductVariant = {
      ...variant2,
      attributes: [redColorAttribute],
    };
    const colors = getVariantColors(
      { ...productMock, variants: [modifiedVariant1, modifiedVariant2] },
      colorMappingNames
    );
    expect(colors.length).toBe(2);
    expect(colors[0].colorName).toBe(
      colorMappingNames[
        whiteColorAttribute.value.key as keyof typeof colorMappingNames
      ]
    );
    expect(colors[0].colorKey).toBe(whiteColorAttribute.value.key);
    expect(colors[1].colorName).toBe(
      colorMappingNames[
        redColorAttribute.value.key as keyof typeof colorMappingNames
      ]
    );
    expect(colors[1].colorKey).toBe(redColorAttribute.value.key);
  });
});
