import { AtLinkProps, MlMediaProps } from "@mono-repo-demo/atomic-library";

export interface MlBrandProps {
  /** An optional CSS class to apply custom styling to the component. */
  className?: string;

  /** An optional identifier used for testing purposes to locate the component in the DOM. */
  dataTestId?: string;

  /** An object containing the image sources for both desktop and mobile views. */
  image: MlMediaProps;

  /** An optional object containing the <abbr>URL</abbr> (href) and an optional wrapper component (linkWrapper) for the link. */
  link?: Pick<AtLinkProps, "href" | "linkWrapper">;
}
