import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OrContentStrip } from "./or-content-strip";
import {
  OrContentStripBackgroundColor,
  OrContentStripListType,
  OrContentStripProps,
  OrContentStripTextAlignment,
} from "./or-content-strip.types";

const defaultProps: OrContentStripProps = {
  title: "Test Title",
  subtitle: "Test Subtitle",
  paragraph: "Test Paragraph",
  image: { imageDesktop: { src: "", alt: "Test Image" } },
  link: { href: "#", label: "Learn more" },
  align: OrContentStripTextAlignment.RIGHT,
  backgroundColor: OrContentStripBackgroundColor.PRIMARY,
  listType: OrContentStripListType.NUMBER,
  dataTestId: "or-content-strip",
};

describe("organisms/or-content-strip", () => {
  it("should render correctly", () => {
    const { getByText, getByTestId } = render(
      <OrContentStrip {...defaultProps} />
    );
    const strip = getByTestId(defaultProps.dataTestId as string);
    const bodyContainer = getByTestId("or-content-strip-body-container");

    expect(strip).toBeInTheDocument();
    expect(bodyContainer).toBeInTheDocument();

    if (defaultProps.title && defaultProps.subtitle && defaultProps.paragraph) {
      expect(getByText(defaultProps.title)).toBeInTheDocument();
      expect(getByText(defaultProps.subtitle)).toBeInTheDocument();
      expect(getByText(defaultProps.paragraph)).toBeInTheDocument();
    }

    if (defaultProps.firstItem) {
      expect(getByText(defaultProps.firstItem)).toBeInTheDocument();
    }

    if (defaultProps.secondItem) {
      expect(getByText(defaultProps.secondItem)).toBeInTheDocument();
    }

    if (defaultProps.thirdItem) {
      expect(getByText(defaultProps.thirdItem)).toBeInTheDocument();
    }
  });

  describe("when assets properties are given", () => {
    it("should render link correctly", () => {
      const { getByText } = render(<OrContentStrip {...defaultProps} />);
      expect(getByText("Learn more")).toBeInTheDocument();
    });

    it("should render image correctly when provided", () => {
      const { getByAltText } = render(<OrContentStrip {...defaultProps} />);
      const imageElement = getByAltText("Test Image");
      expect(imageElement).toBeInTheDocument();
    });

    it("should not render image when image is not provided", () => {
      const { getByTestId } = render(
        <OrContentStrip {...defaultProps} image={undefined} />
      );
      const imageContainer = getByTestId("or-content-strip-image-container");
      expect(imageContainer.firstChild).toBeNull();
    });
  });

  describe("when align property is left or right", () => {
    it("should have xl:flex-row class when align value is right", () => {
      const { getByTestId } = render(
        <OrContentStrip
          {...defaultProps}
          align={OrContentStripTextAlignment.RIGHT}
        />
      );
      const bodyContainer = getByTestId("or-content-strip-container");

      expect(bodyContainer).toHaveClass("xl:flex-row");
    });

    it("should have xl:flex-row-reverse class when align value is left", () => {
      const { getByTestId } = render(
        <OrContentStrip
          {...defaultProps}
          align={OrContentStripTextAlignment.LEFT}
        />
      );
      const bodyContainer = getByTestId("or-content-strip-container");

      expect(bodyContainer).toHaveClass("xl:flex-row-reverse");
    });
  });

  describe("when backgroundColor property is primary or secondary", () => {
    it("should have bg-surface-primary class when backgroundColor value is primary", () => {
      const { getByTestId } = render(
        <OrContentStrip
          {...defaultProps}
          backgroundColor={OrContentStripBackgroundColor.PRIMARY}
        />
      );
      const strip = getByTestId(defaultProps.dataTestId as string);

      expect(strip).toHaveClass("bg-surface-primary");
    });

    it("should have bg-surface-secondary class when backgroundColor value is secondary", () => {
      const { getByTestId } = render(
        <OrContentStrip
          {...defaultProps}
          backgroundColor={OrContentStripBackgroundColor.SECONDARY}
        />
      );
      const strip = getByTestId(defaultProps.dataTestId as string);

      expect(strip).toHaveClass("bg-surface-secondary");
    });
  });

  describe("when listType property is bullet, check or number", () => {
    it("should render numbers when listType value is number", () => {
      const { getByText } = render(
        <OrContentStrip
          {...defaultProps}
          listType={OrContentStripListType.NUMBER}
          firstItem="Item 1"
        />
      );
      const item = getByText("1.");

      expect(item).toBeInTheDocument();
    });

    it("should render bullets when listType value is bullet", () => {
      const { getByText } = render(
        <OrContentStrip
          {...defaultProps}
          listType={OrContentStripListType.BULLET}
          firstItem="Item 1"
        />
      );
      const item = getByText("•");

      expect(item).toBeInTheDocument();
    });

    it("should render check icons when listType value is check", () => {
      const { getByTestId } = render(
        <OrContentStrip
          {...defaultProps}
          listType={OrContentStripListType.CHECK}
          firstItem="Item 1"
        />
      );
      const itemIcon = getByTestId(
        "or-content-strip-body-container"
      ).querySelector("svg");

      expect(itemIcon).toBeInTheDocument();
    });
  });
});
