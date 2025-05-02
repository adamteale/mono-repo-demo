import { ReactNode } from "react";
import { OrFooterProps } from "@mono-repo-demo/atomic-library";
import { OrHeaderProps } from "../../organisms";

export interface LayoutProps {
  header: OrHeaderProps;
  footer?: OrFooterProps;
  children?: ReactNode;
}
