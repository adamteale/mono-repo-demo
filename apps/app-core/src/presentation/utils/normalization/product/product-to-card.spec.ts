import { describe, expect, it } from "vitest";
import { productMock } from "../../../test/fixtures/product";

import { normalizeProductToCard } from "./product-to-card";
import { InlineColorPickerProps } from "@mono-repo-demo/atomic-library";
import { PLACEHOLDER_IMAGE_PATH } from "../files/constants";
import { environment } from "../../../config/environment";
import { MlProductCardProps } from "@components-library/ecommerce";

describe("normalize-product-to-card", () => {
  describe("When normalize a valid data", () => {
    it("Should normalize product data to card format", () => {
      environment.getProductBy = "slug";
      const colors: InlineColorPickerProps = {
        colorVariations: [
          { colorKey: "beige", colorName: "Beige", isSoldOut: false },
        ],
      };
      const expectedCardData: MlProductCardProps = {
        colors,
        image: {
          src: "https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/073475_1_large.jpg",
          alt: "Brunello beige XXS swater",
          onErrorSrc: PLACEHOLDER_IMAGE_PATH,
        },
        link: {
          href: `/products/${productMock.slug}`,
        },
        price: "$6,071.69",
        originalPrice: "$6,391.25",
        name: "A-Sweater Brunello Cucinelli cream",
        loadingLabel: "Loading",
        outOfStock: false,
        outOfStockLabel: "Out Of Stock",
        addToBasketLabel: "Add to Cart",
        brand: undefined,
        addToBasketOnClick: async () => true,
      };

      const cardProps = normalizeProductToCard({
        product: productMock,
        variant: productMock.variants[0],
        colors,
      });

      expect(cardProps.colors).toStrictEqual(expectedCardData.colors);
      expect(cardProps.image).toStrictEqual(expectedCardData.image);
      expect(cardProps.link).toStrictEqual(expectedCardData.link);
      expect(cardProps.price).toBe(expectedCardData.price);
      expect(cardProps.originalPrice).toBe(expectedCardData.originalPrice);
      expect(cardProps.name).toBe(expectedCardData.name);
      expect(cardProps.loadingLabel).toBe(expectedCardData.loadingLabel);
      expect(cardProps.outOfStock).toBe(expectedCardData.outOfStock);
      expect(cardProps.outOfStockLabel).toBe(expectedCardData.outOfStockLabel);
      expect(cardProps.addToBasketLabel).toBe(
        expectedCardData.addToBasketLabel
      );
      expect(cardProps.brand).toBe(expectedCardData.brand);
    });

    it("Should have images array with items having { src: string, alt: string } structure", () => {
      const cardProps = normalizeProductToCard({
        product: productMock,
        variant: productMock.variants[0],
      });
      expect(typeof cardProps.image.src).toBe("string");
      expect(typeof cardProps.image.alt).toBe("string");
    });

    it("Should have a valid product name", () => {
      const cardProps = normalizeProductToCard({
        product: productMock,
        variant: productMock.variants[0],
      });
      const productName = cardProps.name;

      expect(typeof productName).toBe("string");
      expect(productName.length).toBeGreaterThan(0);
    });

    it("Should have a link with a string href key", () => {
      const cardProps = normalizeProductToCard({
        product: productMock,
        variant: productMock.variants[0],
      });
      const link = cardProps.link;

      expect(link && typeof link.href).toBe("string");
    });

    it("Should have color variations as an array with colors", () => {
      const cardProps = normalizeProductToCard({
        product: productMock,
        variant: productMock.variants[0],
        colors: {
          colorVariations: [{ colorKey: "black", colorName: "Black" }],
        },
      });
      const colorVariations = cardProps.colors?.colorVariations || [];

      expect(Array.isArray(colorVariations)).toBe(true);
      expect(colorVariations.length).toBeGreaterThan(0);
    });

    it("Should have price following the expected structure", () => {
      const cardProps = normalizeProductToCard({
        product: productMock,
        variant: productMock.variants[0],
      });
      const price = cardProps.price;

      expect(price && typeof price === "string").toBe(true);
    });

    it("Should have originalPrice with amount, formatted, and currency attributes", () => {
      const cardProps = normalizeProductToCard({
        product: productMock,
        variant: productMock.variants[0],
      });
      const originalPrice = cardProps.originalPrice;

      expect(originalPrice && typeof originalPrice === "string").toBe(true);
    });
  });

  describe("When the data received is incorrect", () => {
    it("Should handle case where discountInfo is undefined", () => {
      const productWithoutDiscount = {
        ...productMock,
        variants: [{ ...productMock.variants[0], discountInfo: undefined }],
      };
      const cardProps = normalizeProductToCard({
        product: productWithoutDiscount,
        variant: productWithoutDiscount.variants[0],
      });
      const { originalPrice } = cardProps;
      expect(originalPrice).toBeDefined();
    });

    it("Should handle case where originalPrice is undefined", () => {
      const productWithoutOriginalPrice = {
        ...productMock,
        variants: [{ ...productMock.variants[0], originalPrice: undefined }],
      };
      const cardProps = normalizeProductToCard({
        product: productWithoutOriginalPrice,
        variant: productWithoutOriginalPrice.variants[0],
      });
      const originalPrice = cardProps.originalPrice;
      expect(originalPrice).toBeUndefined();
    });

    it("Should handle case where price is undefined", () => {
      const productWithoutPrice = {
        ...productMock,
        variants: [{ ...productMock.variants[0], price: undefined }],
      };
      const cardProps = normalizeProductToCard({
        product: productWithoutPrice,
        variant: productWithoutPrice.variants[0],
      });
      expect(cardProps.price).toEqual("");
    });
  });
});
