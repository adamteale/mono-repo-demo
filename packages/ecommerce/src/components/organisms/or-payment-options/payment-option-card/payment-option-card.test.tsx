import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { PaymentOptionCard } from "./payment-option-card";
import {
  AtRadioProps,
  OrFormColumn,
  OrFormProps,
} from "@mono-repo-demo/atomic-library";

const radioProps: AtRadioProps = {
  checked: false,
  title: "Test Title",
  description: "Test Description",
  disabled: false,
  onChange: () => {},
  dataTestId: "",
};

const formProps: Omit<OrFormProps, "manager"> = {
  controls: {
    cardNumber: {
      type: "password",
      placeholder: "1234 5678 9012 3456",
      label: "Card Number",
    },
  },
  columns: OrFormColumn.TWO,
  handleSubmit: () => {},
};

const dataTestId = "payment-option-0";

describe("organisms/or-payment-options/payment-option-card", () => {
  it("should not render the form and description when radioProps.checked is false", () => {
    const { queryByTestId, queryByText } = render(
      <PaymentOptionCard
        radioProps={radioProps}
        formProps={formProps}
        dataTestId={dataTestId}
      />
    );

    expect(queryByTestId("Test Title-container")).not.toBeInTheDocument();
    expect(queryByText("Test Description")).not.toBeInTheDocument();
  });

  it("should conditionally renders form and description based on radioProps.checked", () => {
    const { getByTestId, queryByText } = render(
      <PaymentOptionCard
        radioProps={{ ...radioProps, checked: true }}
        formProps={formProps}
        dataTestId={dataTestId}
      />
    );

    expect(getByTestId(`${dataTestId}-form-container`)).toBeInTheDocument();
    expect(queryByText("Test Description")).toBeInTheDocument();
  });

  it("should renders multiple images correctly", () => {
    const images = [
      { src: "test-image-1.jpg", alt: "Test Image 1" },
      { src: "test-image-2.jpg", alt: "Test Image 2" },
    ];

    const { getAllByAltText } = render(
      <PaymentOptionCard
        radioProps={{ ...radioProps, checked: true }}
        images={images}
        dataTestId={dataTestId}
      />
    );

    const imagesTestImage1 = getAllByAltText("Test Image 1");
    const imagesTestImage2 = getAllByAltText("Test Image 2");

    expect(imagesTestImage1.length).toBeGreaterThan(0);
    expect(imagesTestImage2.length).toBeGreaterThan(0);
  });
});
