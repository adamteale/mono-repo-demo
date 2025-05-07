import type { PlacesType } from "react-tooltip";

export interface AtTooltipProps {
  /** The position of the tooltip relative to the associated element. Default is 'bottom-start'. */
  alignment?: PlacesType;

  /** The content or element that the tooltip is associated with. */
  children: React.ReactNode;

  /** Additional CSS classes to be applied to the tooltip container. */
  className?: string;

  /** The text or HTML content to be displayed inside the tooltip. */
  content: string;

  /** The delay in milliseconds before the tooltip hides after the user stops interacting with the associated element. */
  delayHide?: number;

  /** The delay in milliseconds before the tooltip shows after the user starts interacting with the associated element. */
  delayShow?: number;

  /** If `true`, the tooltip will be hidden. */
  hidden?: boolean;

  /** A unique identifier for the tooltip, used for anchoring and referencing. */
  id: string;

  /** If `true`, the tooltip will be shown when the associated element is clicked. */
  openOnClick?: boolean;

  /** Connects the element that triggers the tooltip to the tooltip itself */
  ariaDescribedBy?: string;
}
