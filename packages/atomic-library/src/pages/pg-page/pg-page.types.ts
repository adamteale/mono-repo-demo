import { ReactNode } from "react";
import { OrFooterProps, OrHeaderProps } from "../../organisms";

export interface PgPageProps {
  header: OrHeaderProps;
  // Intended to be used with any of the available template components
  // TmFlex, TmCheckout, TmCatalog, TmBasket
  children: ReactNode;
  footer?: OrFooterProps;
}
