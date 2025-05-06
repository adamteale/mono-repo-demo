import { MlProductCard } from "@components-library/ecommerce";
import { useBasket } from "../../../context/basket/use-basket";
import { useGlobalContext } from "../../../context/global";
import { Product, ProductSearchResult } from "../../../../types";
import { normalizeProductToCard } from "../../../utils/normalization/product/product-to-card";
import { useProductVariant } from "../../template-wrappers/tm-product-detail-wrapper/use-product-variant/use-product-variant";

export const MlProductCardRenderer = ({
  product,
  onBrandSelect,
}: {
  product: Product | ProductSearchResult;
  onBrandSelect?: (update: string) => void;
}) => {
  const { selectedVariant, colors, sizes } = useProductVariant(product);
  const { addProductToBasket } = useBasket();
  const { filters } = useGlobalContext();

  const props = normalizeProductToCard({
    product,
    variant: selectedVariant,
    colors,
    sizes,
    // We only allow the addition of the item to the basket if
    // it does not have complex variant configs (size + color)
    addProductToBasket:
      !sizes && selectedVariant?.stock ? addProductToBasket : undefined,
    link: undefined,
    brandFilterKey: filters?.find((filter) => filter.identifier === "brand")
      ?.key,
    onBrandSelect,
  });

  return <MlProductCard {...props} />;
};
