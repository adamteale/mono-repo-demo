import { ReactNode } from "react";
import { AtTooltip } from "./at-tooltip";
import { AtTooltipProps } from "./at-tooltip.types";
import { Platform } from "react-native";

export const AtTooltipWrapper = ({
  tooltip: { content, id, alignment = "top", openOnClick = true },
  children,
  useTooltip = false,
}: {
  tooltip: Omit<AtTooltipProps, "children">;
  children: ReactNode;
  useTooltip?: boolean;
}) => {
  if (Platform.OS === "web" && useTooltip) {
    return (
      <AtTooltip
        id={id}
        openOnClick={openOnClick}
        content={content}
        alignment={alignment}
      >
        {children}
      </AtTooltip>
    );
  }

  return <>{children}</>;
};
