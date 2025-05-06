import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { TmFlex } from "./tm-flex";

describe("templates/tm-flex", () => {
  it("should render the component with children", () => {
    const { getByText } = render(
      <TmFlex>
        <View>Test Child</View>
      </TmFlex>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("should render the component with multiple children", () => {
    const { getByText } = render(
      <TmFlex>
        <View>First Child</View>
        <View>Second Child</View>
      </TmFlex>
    );
    const firstChild = getByText("First Child");
    const secondChild = getByText("Second Child");

    expect(firstChild.nextSibling).toContainElement(secondChild);
  });
});
