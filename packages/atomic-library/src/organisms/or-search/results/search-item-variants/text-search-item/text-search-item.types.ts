import { OrSearchItem } from "../../../or-search.types";

export interface TextSearchItemProps {
  link: OrSearchItem["link"];
  name: string;
  className?: string;
  dataTestId?: string;
  onClick?: () => void;
}
