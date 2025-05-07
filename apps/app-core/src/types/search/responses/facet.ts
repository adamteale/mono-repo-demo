import { RangeVariant } from "@mono-repo-demo/atomic-library";

export interface ProductFacet {
  key: string;
  count?: number;
  results: (
    | {
        value: string;
        count: number;
      }
    | { from: number; to: number; count: number; rangeOrigin?: RangeVariant }
  )[];
}
