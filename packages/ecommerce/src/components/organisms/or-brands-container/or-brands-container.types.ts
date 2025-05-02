import { AtLinkProps } from "@mono-repo-demo/atomic-library";

export interface OrBrandsContainerProps {
  title: string;
  children: React.ReactNode;
  seeMoreLabel?: string;
  showLink?: boolean;
  linkProps?: AtLinkProps;
  background?: "primary" | "secondary";
}
