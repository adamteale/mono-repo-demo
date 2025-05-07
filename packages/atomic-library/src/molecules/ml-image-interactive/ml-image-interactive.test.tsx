import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MlImageInteractive } from "./ml-image-interactive";

const defaultProps = {
  image: { src: "/white-shoes.png", alt: "White shoes" },
  ariaLabel: "Click to zoom",
};

const mount = () => render(<MlImageInteractive {...defaultProps} />);

describe("molecules/ml-image-interactive", () => {
  describe("when it is loaded", () => {
    it("should render correctly", async () => {
      const render = mount();

      expect(
        await render.findAllByAltText(defaultProps.image.alt)
      ).toBeTruthy();
      expect(await render.findByLabelText(defaultProps.ariaLabel)).toBeTruthy();
    });
  });

  describe("when user interacts with image", () => {
    it("should zoom on click", async () => {
      const user = userEvent.setup();
      const render = mount();

      await user.click(
        render.getByRole("button", { name: defaultProps.ariaLabel })
      );
      expect(
        render.container.querySelector("img")?.style.getPropertyValue("scale")
      ).toBe("2");

      await user.click(
        render.getByRole("button", { name: defaultProps.ariaLabel })
      );
      expect(
        render.container.querySelector("img")?.style.getPropertyValue("scale")
      ).toBeFalsy();
    });

    it.todo("should show the zoom icon hovering the container on desktop");
    it.todo("should hide the zoom icon leaving the container on desktop");
    it.todo("should toggle the icon when it is clicked");
  });
});
