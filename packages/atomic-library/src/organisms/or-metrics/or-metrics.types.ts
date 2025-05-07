import { MlMediaProps } from "../../molecules";

export enum OrMetricsContentAlignment {
  LEFT = "left",
  RIGHT = "right",
}

export interface OrMetricsProps {
  title?: string;
  description?: string;
  image?: MlMediaProps;
  metricArray: MetricItem[];
  align?: OrMetricsContentAlignment;
}

export interface MetricItem {
  value: string;
  title: string;
  description?: string;
}
