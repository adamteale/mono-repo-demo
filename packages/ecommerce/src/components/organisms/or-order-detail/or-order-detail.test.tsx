import { describe, it, expect, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { OrOrderDetail } from "./or-order-detail";
import { OrOrderDetailProps } from "./or-order-detail.types";

const defaultProps: OrOrderDetailProps = {
  title: "Order Details",
  detailItems: [
    {
      title: "Email",
      link: { children: "Edit" },
      details: [{ label: "jhon*****@demo.com" }],
    },
    {
      title: "Shipping Address",
      link: { children: "Edit" },
      details: [
        { label: "Jhon Smith" },
        { label: "496 East Main St. Apt. 4, North Alley Street" },
        { label: "New York NY 13827989" },
        { label: "United States" },
      ],
    },
    {
      title: "Delivery Method",
      link: { children: "Edit" },
      details: [
        { label: "Standard Delivery", value: "$5.00" },
        { label: "Product Arrival Estimated Date", value: "Wed, Jul 28th" },
      ],
    },
  ],
  onSubmit: vi.fn(),
  formButton: { children: "Place Order" },
  formCheckbox: {
    type: "checkbox",
    label:
      "By placing this order, I agree with the privacy policy and terms of use.",
    className: "text-start",
    required: true,
  },
};

describe("organisms/or-order-detail", () => {
  it("renders correctly with out image and submits form", async () => {
    const { getByText, queryAllByTestId, getByRole, getByTestId } = render(
      <OrOrderDetail
        {...defaultProps}
        detailItems={[
          {
            title: "Payment Method",
            link: { children: "Edit" },
            image: {
              src: "/bee-shop.png",
              className: "h-fit max-w-[53px]",
            },
            details: [
              { label: "Jhon Smith" },
              { label: "Visa ******4356" },
              { label: "Exp 03/2027" },
            ],
          },
          ...defaultProps.detailItems,
        ]}
      />
    );

    expect(getByText(defaultProps.title)).toBeInTheDocument();

    const detailItems = queryAllByTestId("detail-item");
    expect(detailItems).toHaveLength(defaultProps.detailItems.length + 1);

    const image = getByRole("img");
    expect(image).toBeInTheDocument();

    const form = getByTestId("or-order-detail-form");
    fireEvent.submit(form);

    expect(defaultProps.onSubmit).toHaveBeenCalled();
  });

  it("renders correctly with image and submits form", async () => {
    const { getByText, queryAllByTestId, getByTestId } = render(
      <OrOrderDetail {...defaultProps} />
    );

    expect(getByText(defaultProps.title)).toBeInTheDocument();

    const detailItems = queryAllByTestId("detail-item");
    expect(detailItems).toHaveLength(defaultProps.detailItems.length);

    const form = getByTestId("or-order-detail-form");
    fireEvent.submit(form);

    expect(defaultProps.onSubmit).toHaveBeenCalled();
  });
});
