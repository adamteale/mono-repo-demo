import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MlVertical } from ".";

describe("molecules/ml-media-vertical", () => {
  describe("when the component is mounted", () => {
    it("renders without crashing", () => {
      const { getByText } = render(<MlVertical title="Test Title" />);
      expect(getByText("Test Title")).toBeInTheDocument();
    });

    it("displays the title and body correctly", () => {
      const { getByText } = render(
        <MlVertical title="Test Title" body="Test Body" />
      );
      expect(getByText("Test Title")).toBeInTheDocument();
      expect(getByText("Test Body")).toBeInTheDocument();
    });

    it("renders the AtIcon, AtImage, and AtButton components based on the icon, image, and button props", () => {
      const icon = "reload";
      const image = {
        imageDesktop: { src: "test-image.jpg", alt: "test-image" },
      };
      const buttonProps = {
        label: "Button Label",
        href: "#",
      };
      const { getByText, getByAltText } = render(
        <MlVertical
          title="Test Title"
          icon={icon}
          image={image}
          buttonProps={buttonProps}
        />
      );
      expect(getByAltText("test-image")).toBeInTheDocument();
      expect(getByText("Button Label")).toBeInTheDocument();
    });
  });

  describe("when the component is mounted without button, icon, body, and image props", () => {
    it("does not render the button if buttonLabel and buttonOnClick are not passed", () => {
      const { queryByText } = render(<MlVertical title="Test Title" />);
      expect(queryByText("Button Label")).not.toBeInTheDocument();
    });

    it("does not render the button if buttonLabel is passed but buttonOnClick is not", () => {
      const buttonProps = {
        label: "Button Label",
        href: "",
      };
      const { queryByText } = render(
        <MlVertical title="Test Title" buttonProps={buttonProps} />
      );
      expect(queryByText("Button Label")).not.toBeInTheDocument();
    });

    it("does not render the button if buttonClick is passed but buttonLabel is not", () => {
      const buttonProps = {
        label: "",
        href: "#",
      };
      const { queryByText } = render(
        <MlVertical title="Test Title" buttonProps={buttonProps} />
      );
      expect(queryByText("Button Label")).not.toBeInTheDocument();
    });

    it("does not render the icon", () => {
      const { queryByRole } = render(<MlVertical title="Test Title" />);
      expect(queryByRole("img")).not.toBeInTheDocument();
    });

    it("does not render the body", () => {
      const { queryByText } = render(<MlVertical title="Test Title" />);
      expect(queryByText("Test Body")).not.toBeInTheDocument();
    });

    it("does not render the image", () => {
      const { queryByRole } = render(<MlVertical title="Test Title" />);
      expect(queryByRole("img")).not.toBeInTheDocument();
    });
  });

  describe("when the button component is clicked", () => {
    it("calls the buttonOnClick function which was passed as prop", () => {
      const buttonProps = {
        label: "Button Label",
        href: "#",
      };
      const { getByText } = render(
        <MlVertical title="Test Title" buttonProps={buttonProps} />
      );

      const button = getByText(buttonProps.label);
      expect(button.closest("a")).toHaveAttribute("href", buttonProps.href);
    });
  });
});
