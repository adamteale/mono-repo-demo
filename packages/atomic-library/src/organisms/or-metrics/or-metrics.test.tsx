import { describe, expect, it } from "vitest";
import { MetricItem, OrMetricsProps } from "./or-metrics.types";
import { render } from "@testing-library/react";
import { OrMetrics } from "./or-metrics";

const metricsProps: OrMetricsProps = {
  title: "Test Title",
  description: "Test Description",
  image: {
    imageDesktop: {
      src: "https://picsum.photos/700/700",
    },
    dataTestId: "metrics-img-id",
  },
  metricArray: [
    {
      value: "Test Metric Value 1",
      title: "Test Metric Name 1",
      description: "Test Metric Description 1",
    },
  ],
};

const longMetricArray: MetricItem[] = [
  {
    value: "Test Metric Value 1",
    title: "Test Metric Name 1",
    description: "Test Metric Description 1",
  },
  {
    value: "Test Metric Value 2",
    title: "Test Metric Name 2",
    description: "Test Metric Description 2",
  },
  {
    value: "Test Metric Value 3",
    title: "Test Metric Name 3",
    description: "Test Metric Description 3",
  },
  {
    value: "Test Metric Value 4",
    title: "Test Metric Name 4",
    description: "Test Metric Description 4",
  },
  {
    value: "Test Metric Value 5",
    title: "Test Metric Name 5",
    description: "Test Metric Description 5",
  },
];

describe("organisms/or-metrics", () => {
  describe("when it has 4 or less metrics", () => {
    it("should render the title correctly", () => {
      const { getByText } = render(<OrMetrics {...metricsProps} />);
      expect(getByText("Test Title")).toBeInTheDocument();
    });

    it("should render the description correctly", () => {
      const { getByText } = render(<OrMetrics {...metricsProps} />);
      expect(getByText("Test Description")).toBeInTheDocument();
    });

    it("should render the image correctly", () => {
      const { getByTestId } = render(<OrMetrics {...metricsProps} />);
      const image = getByTestId("metrics-img-id");
      expect(image).toBeInTheDocument();
    });

    it("should render the metric value correctly", () => {
      const { getByText } = render(<OrMetrics {...metricsProps} />);
      expect(getByText("Test Metric Value 1")).toBeInTheDocument();
    });

    it("should render the metric title correctly", () => {
      const { getByText } = render(<OrMetrics {...metricsProps} />);
      expect(getByText("Test Metric Name 1")).toBeInTheDocument();
    });

    it("should render the metric description correctly", () => {
      const { getByText } = render(<OrMetrics {...metricsProps} />);
      expect(getByText("Test Metric Description 1")).toBeInTheDocument();
    });
  });

  describe("when it has over 4 metrics", () => {
    it("should not render metrics with index > 4", () => {
      const { queryByTestId } = render(
        <OrMetrics {...{ ...metricsProps, metricArray: longMetricArray }} />
      );

      expect(queryByTestId("Test Metric Value 5")).not.toBeInTheDocument();
      expect(queryByTestId("Test Metric Name 5")).not.toBeInTheDocument();
      expect(
        queryByTestId("Test Metric Description 5")
      ).not.toBeInTheDocument();
    });
  });
});
