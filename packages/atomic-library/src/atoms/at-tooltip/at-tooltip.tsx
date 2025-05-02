import { Tooltip } from "react-tooltip";
import { AtTooltipProps } from "./at-tooltip.types";

export const AtTooltip = ({
  id,
  children,
  content,
  delayHide = 0,
  delayShow = 0,
  alignment = "bottom-start",
  openOnClick = false,
  hidden = false,
  className = "",
  ariaDescribedBy,
}: AtTooltipProps) => {
  return (
    <View
      className="tooltip-container"
      id={id}
      data-tooltip-delay-show={delayShow}
      data-tooltip-delay-hide={delayHide}
      data-testid="at-tooltip"
      role="tooltip"
      aria-describedby={ariaDescribedBy}
    >
      {children}
      <Tooltip
        className={`${className} max-w-[17.5rem] tooltip-styles`}
        anchorSelect={`#${id}`}
        content={content}
        place={alignment}
        hidden={hidden}
        openOnClick={openOnClick}
      />
    </View>
  );
};
