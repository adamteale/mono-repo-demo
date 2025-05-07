import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { OrCarouselProps } from "./or-carousel.types";
import { OrCarousel } from "./or-carousel";
import { ReactNode } from "react";

const sliderItemText = "slider item";
const sliderItemQuantity = 7;

const sliderItems: ReactNode[] = new Array(sliderItemQuantity).fill(() => {
  return <View>{sliderItemText}</View>;
});

const dataTestId = "or-carousel";

const defaultProps: OrCarouselProps = {
  children: sliderItems,
  className: "",
  dataTestId,
};

const sliderLibrarySelector = ".swiper.swiper-initialized";

describe("organisms/or-carousel", () => {
  it("should render correctly", () => {
    const { getByTestId, getAllByText, container } = render(
      <OrCarousel {...defaultProps} />
    );

    expect(container).toBeTruthy();

    const carrousel = getByTestId(`${dataTestId}-items`);
    expect(carrousel).toBeInTheDocument();

    const slider = container.querySelector(sliderLibrarySelector);
    expect(slider).toBeInTheDocument();

    const sliderItems = getAllByText(sliderItemText);
    expect(sliderItems.length).toEqual(sliderItemQuantity);
  });

  describe("when no children are provided", () => {
    it("should not render", () => {
      const props = { ...defaultProps, children: undefined };
      const { getByTestId, container } = render(<OrCarousel {...props} />);

      expect(container).toBeTruthy();
      expect(() => getByTestId(`${dataTestId}-items`)).toThrow();
    });
  });
});
