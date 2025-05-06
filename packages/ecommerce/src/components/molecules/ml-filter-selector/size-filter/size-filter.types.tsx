import { BaseFilter } from "@mono-repo-demo/atomic-library";
import { MlSizeSelectorProps } from "../..";

// Size Filter Types
export type SizeFilterType = Omit<MlSizeSelectorProps, "onClick"> & BaseFilter;

export interface SizeFilterProps extends SizeFilterType {
  onClick: (index: number) => void;
}
