import { describe, expect, it } from "vitest";
import { getByText, render } from "@testing-library/react";
import { MlCardProps } from "./ml-card.types";
import { MlCard } from "./ml-card";

const props: MlCardProps = {
  label: "Slippers",
  linkProps: {
    href: "/slippers",
  },
  image: {
    imageDesktop: {
      src: "https://google.com/image",
    },
  },
};

describe("molecules/ml-card", () => {
  describe("when the component receives every prop", () => {
    it("should render correctly", () => {
      const { container, getByTestId } = render(<MlCard {...props} />);
      const label = getByText(container, props.label);
      expect(label).toBeInTheDocument();
      expect(getByTestId("ml-media")).toBeInTheDocument();
    });
  });
});
