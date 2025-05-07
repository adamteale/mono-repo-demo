import { AtButtonVariants } from "@mono-repo-demo/atomic-library";
import { MlCardBasketProps } from "../../../../molecules";
import { OrPopUpBasketProps } from "../../or-pop-up-basket.types";

const genericItem: MlCardBasketProps = {
  image: {
    src: "blue-shoes.png",
    alt: "image",
  },
  color: "white",
  productLink: {
    label: "Test",
  },
  title: "Product name",
  eyebrowHeadline: "BRAND",
  size: "8.5",
  description: "Description if necessary.",
  originalPrice: "144",
  price: "$119",
  showInputQuantity: false,
  isQuantityInputDisabled: false,
  onQuantityChange: ({ quantity }) => console.log("submit", quantity),
  onDeleteItem: () => console.log("close"),
  index: "shoes-blue-1",
};

export const orPopUpBasketPropsMock: OrPopUpBasketProps = {
  title: "Your Cart",
  originalSubtotalPrice: "$200",
  subtotalPrice: "$180",
  itemsLabel: "(X items)",
  leftButton: {
    buttonStyleProps: { variant: AtButtonVariants.SECONDARY },
    label: "View Basket",
  },
  rightButton: {
    buttonStyleProps: { variant: AtButtonVariants.PRIMARY },
    label: "Checkout",
  },
  subtotalPriceLabel: "SUBTOTAL:",
  items: [genericItem],
};
