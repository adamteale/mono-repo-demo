import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { BannerContent, BannerContentProps } from "./BannerContent";
import {
  OrHeroBannerContentAlignment,
  OrHeroBannerVariant,
} from "../../or-hero-banner.types";

afterEach(cleanup);

describe("BannerContent", () => {
  it("should render the component correctly with all props", () => {
    const props: BannerContentProps = {
      variant: OrHeroBannerVariant.CONTENT_BANNER,
      align: OrHeroBannerContentAlignment.LEFT,
      tagLabel: "Tag Label",
      pretitle: "Welcome",
      title: "Hello World",
      subtitle: "This is a sample subtitle",
      buttons: [
        { label: "Button 1", href: "/button1" },
        { label: "Button 2", href: "/button2" },
      ],
      isActive: true,
    };

    const { getByText, getAllByRole } = render(<BannerContent {...props} />);

    const tagLabel = getByText(props.tagLabel ?? "");
    expect(tagLabel).toBeInTheDocument();

    const pretitle = getByText(props.pretitle!);
    expect(pretitle).toBeInTheDocument();

    const title = getByText(props.title);
    expect(title).toBeInTheDocument();

    const subtitle = getByText(props.subtitle!);
    expect(subtitle).toBeInTheDocument();

    const buttons = getAllByRole("link");
    expect(buttons.length).toBe(props.buttons?.length);
  });

  it("should render the component correctly with minimal props", () => {
    const props: BannerContentProps = {
      variant: OrHeroBannerVariant.CONTENT_BANNER,
      align: OrHeroBannerContentAlignment.CENTER,
      title: "Hello World",
      subtitle: "This is a sample subtitle",
      isActive: false,
    };

    const { getByText, queryByTestId, queryByTitle, queryAllByRole } = render(
      <BannerContent {...props} />
    );

    const tagLabel = queryByTestId("tag-container");
    expect(tagLabel).toBeNull();

    const pretitle = queryByTitle(/h4/);
    expect(pretitle).toBeNull();

    const title = getByText(props.title);
    expect(title).toBeInTheDocument();

    const subtitle = getByText(props.subtitle!);
    expect(subtitle).toBeInTheDocument();

    const buttons = queryAllByRole("link");
    expect(buttons.length).toBe(0);
  });
});
