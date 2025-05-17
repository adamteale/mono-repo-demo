import { CMSFlex } from "@cms-types/common";

export interface TmFlexWrapperProps {
  template: CMSFlex;
  refresh?: {
    onRefresh: () => void;
    refreshing: boolean;
  };
  listKey?: string;
}
