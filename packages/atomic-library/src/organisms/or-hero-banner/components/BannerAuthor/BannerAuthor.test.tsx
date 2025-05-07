import { cleanup, render } from "@testing-library/react";
import { BannerAuthor } from "./BannerAuthor";
import { afterEach, describe, expect, it } from "vitest";
import { OrHeroBannerAuthorTextColor } from "../../or-hero-banner.types";

afterEach(cleanup);

describe("BannerAuthor", () => {
  it("should render author information correctly", () => {
    const author = {
      authorName: "John Doe",
      authorPicture: { src: "https://example.com/john-doe.jpg" },
      publicationDate: "2022-01-01",
      textColor: OrHeroBannerAuthorTextColor.PRIMARY,
    };

    const { getByAltText, getByText } = render(
      <BannerAuthor author={author} />
    );

    const authorImage = getByAltText(`Image of ${author.authorName}`);
    expect(authorImage).toBeInTheDocument();
    expect(authorImage).toHaveAttribute("src", author.authorPicture.src);

    const authorName = getByText(author.authorName);
    expect(authorName).toBeInTheDocument();

    const publicationDate = getByText(author.publicationDate);
    expect(publicationDate).toBeInTheDocument();
  });

  it("should not render author information if author prop is not provided", () => {
    const { container } = render(<BannerAuthor />);
    expect(container.firstChild).toBeNull();
  });
});
