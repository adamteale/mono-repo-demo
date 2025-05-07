import { AtLinkProps } from "../../atoms";

export interface MlBreadcrumbProps {
  /** An optional CSS class to apply custom styling to the component. */
  className?: string;

  /** An array of `AtLinkProps` objects, each representing a breadcrumb link. This property is required and defines the navigation path displayed by the breadcrumb. */
  links: AtLinkProps[];
}
