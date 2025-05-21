import { MlCardBasketProps } from "../../molecules";
import { OrOrderDetailProps, OrOrderSummaryProps } from "../../organisms";

const defaultTooltipContent =
  "(e.g., “Free shipping over $50”) or the difference required to qualify (e.g., “Add $15.35 to qualify for free shipping”).";

const defaultOrderInfoArray = [
  {
    label: "Subtotal",
    value: "$150.50",
    tooltipContent: defaultTooltipContent,
  },
  {
    label: "Discounts",
    value: "$0.00",
    tooltipContent: defaultTooltipContent,
    valueIndicatorColor: "positive" as "positive",
  },
  {
    label: "Taxes",
    value: "$0.00",
    tooltipContent: defaultTooltipContent,
  },
  {
    label: "Shipping",
    value: "$0.00",
    tooltipContent: defaultTooltipContent,
  },
];

const defaultItems: MlCardBasketProps[] = [
  {
    index: "1",
    showInputQuantity: true,
    color: "beige",
    size: "4",
    eyebrowHeadline: "Seavees",
    image: { src: "https://picsum.photos/500/500" },
    productLink: {
      href: "#",
    },
    stockAmount: 5,
    initialInputValue: 1,
    onDeleteItem: () => {},
    price: "$50.00",
    title: "Product",
  },
  {
    index: "2",
    showInputQuantity: true,
    color: "blue",
    size: "5",
    eyebrowHeadline: "Seavees",
    image: { src: "https://picsum.photos/500/500" },
    productLink: {
      href: "#",
    },
    stockAmount: 5,
    initialInputValue: 1,
    onDeleteItem: () => {},
    price: "$50.00",
    title: "Product 2",
  },
];

const totalItems = 3;

const button = {
  buttonLabel: "CHECKOUT",
  buttonActionUrl: "/",
};

const orderSummaryProps: OrOrderSummaryProps = {
  title: "Order summary",
  className: "border-0",
  totalPriceLabel: "Order Total",
  totalPrice: "$357",
  orderLabelArray: defaultOrderInfoArray,
  items: defaultItems,
  totalItems: totalItems,
  withCart: true,
  buttonProps: {
    label: button.buttonLabel,
  },
};

const orderDetailProps: OrOrderDetailProps = {
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
        { label: "Standar Delivery", value: "$5.00" },
        { label: "Product Arrival Estimated Date", value: "Wed, Jul 28th" },
      ],
    },
    {
      title: "Payment Method",
      link: { children: "Edit" },
      image: {
        src: "/visa.svg",
      },
      details: [
        { label: "Jhon Smith" },
        { label: "Visa ******4356" },
        { label: "Exp 03/2027" },
      ],
    },
  ],
  onSubmit: (e) => {
    e.preventDefault();
  },
  formButton: { children: "Place Order" },
  formCheckbox: {
    type: "checkbox",
    label:
      "By placing this order, I agree with the privacy policy and terms of use.",
    className: "text-start",
    required: true,
  },
};

export const defaultProps = {
  copyright:
    "Copyright © 2023. Apply Digital. Tech Accelerator. All rights reserved.",
  orderDetailProps,
  orderSummaryProps,
};
