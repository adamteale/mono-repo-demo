import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { OrContent } from "./content";
import { OrContentProps } from "./content.types";

const childrenContent = "Test Content";

const defaultProps: OrContentProps = {
  title: "Terms and Conditions",
  children: <Text>{childrenContent}</Text>,
};

describe("organisms/or-content", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <OrContent {...defaultProps}>{defaultProps.children}</OrContent>
    );
    const title = getByText(defaultProps.title);
    const content = getByText(childrenContent);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
