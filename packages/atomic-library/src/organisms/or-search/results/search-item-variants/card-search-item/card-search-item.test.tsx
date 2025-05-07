import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { CardSearchItem } from "./card-search-item";
import { CardSearchItemProps } from "./card-search-item.types";
import { MobileSearchboxProvider } from "../../../../../utils";

const props: CardSearchItemProps = {
  link: {},
  name: "Cool bag",
  price: "$12.49",
  image: { src: "https://picsum.photos/200/200" },
};

const DISCOUNT_TEXT = "% Off";

describe("organisms/or-search/card-search-item", () => {
  describe("when the component receives minimal props", () => {
    it("should render correctly", () => {
      const { getByText } = render(
        <MobileSearchboxProvider>
          <CardSearchItem {...props} />
        </MobileSearchboxProvider>
      );
      const label = getByText(props.name);
      expect(label).toBeInTheDocument();
    });
  });

  describe("when receives image", () => {
    it("should render image", () => {
      const { getByAltText } = render(
        <MobileSearchboxProvider>
          <CardSearchItem {...props} image={{ src: "#", alt: "image" }} />
        </MobileSearchboxProvider>
      );
      const image = getByAltText("image");
      expect(image).toBeInTheDocument();
    });
  });

  describe("when receives short description", () => {
    it("should render respective paragraph", () => {
      const { getByText } = render(
        <MobileSearchboxProvider>
          <CardSearchItem {...props} shortDescription="my-description" />
        </MobileSearchboxProvider>
      );
      const shortDescription = getByText("my-description");
      expect(shortDescription).toBeInTheDocument();
    });
  });

  describe("when receives price and discount", () => {
    it("should render both prices and discount percentage", () => {
      const discountPercentage = 4;
      const originalPriceValue = "$30.00";
      const { getByText } = render(
        <MobileSearchboxProvider>
          <CardSearchItem
            {...props}
            originalPrice={originalPriceValue}
            discountPercentage={discountPercentage}
          />
        </MobileSearchboxProvider>
      );
      const discount = getByText(discountPercentage + DISCOUNT_TEXT);
      const originalPrice = getByText(originalPriceValue);
      expect(discount).toBeInTheDocument();
      expect(originalPrice).toBeInTheDocument();
    });
  });
});
