import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { OrBrandsContainer } from "./or-brands-container";
import { OrBrandsContainerProps } from "./or-brands-container.types";

const defaultProps: Omit<OrBrandsContainerProps, "children"> = {
  title: "Brands",
  seeMoreLabel: "SEE MORE",
  showLink: true,
};

describe("organisms/or-container", () => {
  describe("when the component is created and showLink is true", () => {
    it("should render correctly", () => {
      const { getAllByText, getByTestId, getByText } = render(
        <OrBrandsContainer {...defaultProps}>
          <Text>dummy</Text>
          <Text>dummy</Text>
          <Text>dummy</Text>
        </OrBrandsContainer>
      );

      const title = getByText(defaultProps.title!);
      const seeMoreLabel = getByText(defaultProps.seeMoreLabel!);
      const header = getByTestId("or-brands-container-header");

      expect(getAllByText("dummy").length).toBe(3);
      expect(header).toBeInTheDocument();
      expect(
        getByTestId("or-brands-container-div").classList.contains("flex")
      ).toBeTruthy();
      expect(getAllByText(defaultProps.title!).length).toBe(1);
      expect(title).toBeInTheDocument();
      expect(getAllByText(defaultProps.seeMoreLabel!).length).toBe(1);
      expect(seeMoreLabel).toBeInTheDocument();
      expect(title.compareDocumentPosition(seeMoreLabel)).toBe(4);
      expect(header.classList.contains("justify-between")).toBeTruthy();
    });
  });

  describe("when the component is created and showLink is false", () => {
    it("should render correctly without the link", () => {
      const { getAllByText, getByTestId, getByText, queryByText } = render(
        <OrBrandsContainer {...defaultProps} showLink={false}>
          <Text>dummy</Text>
          <Text>dummy</Text>
          <Text>dummy</Text>
        </OrBrandsContainer>
      );

      const title = getByText(defaultProps.title!);
      const header = getByTestId("or-brands-container-header");

      expect(getAllByText("dummy").length).toBe(3);
      expect(header).toBeInTheDocument();
      expect(
        getByTestId("or-brands-container-div").classList.contains("flex")
      ).toBeTruthy();
      expect(getAllByText(defaultProps.title!).length).toBe(1);
      expect(title).toBeInTheDocument();
      expect(queryByText(defaultProps.seeMoreLabel!)).toBeNull();
      expect(header.classList.contains("justify-center")).toBeTruthy();
    });
  });
});
