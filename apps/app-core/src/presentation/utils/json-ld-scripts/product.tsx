import { PRODUCT_VARIATIONS_KEY, ProductVariant } from "../../components/types";
import { getAttributeProperties } from "../product/get-attribute-properties/get-attribute-properties";
import { SLUG_KEY } from "../slug-keys";

export const ProductJsonLd = ({ product }: { product: Product }) => {
  return null;
  // if (!product) return null;

  // const productUrl = `${environment.baseUrl}/${SLUG_KEY.PRODUCTS}/${product.slug}`;

  // const handleVariantData = (variant: ProductVariant) => {
  //   const color = getAttributeProperties(
  //     variant.attributes,
  //     PRODUCT_VARIATIONS_KEY.COLOR
  //   ).colorKey;
  //   const size = getAttributeProperties(
  //     variant.attributes,
  //     PRODUCT_VARIATIONS_KEY.SIZE
  //   ).sizeName;

  //   let variantName = product.name;

  //   if (color && size) {
  //     variantName += ` - ${color}, ${size}`;
  //   } else if (color) {
  //     variantName += ` - ${color}`;
  //   } else if (size) {
  //     variantName += ` - ${size}`;
  //   }

  //   return {
  //     "@type": "Product",
  //     sku: variant.sku,
  //     image: variant.images[0].src,
  //     name: variantName,
  //     description: product.description,
  //     color,
  //     size,
  //     offers: variant.price
  //       ? {
  //           "@type": "Offer",
  //           url: productUrl,
  //           priceCurrency: variant.price.currency,
  //           price: variant.price.amount,
  //           itemCondition: "https://schema.org/NewCondition",
  //           availability: "https://schema.org/InStock",
  //         }
  //       : undefined,
  //     aggregateRating: product.rating
  //       ? {
  //           "@type": "AggregateRating",
  //           ratingValue: product.rating.average,
  //           reviewCount: product.rating.count,
  //         }
  //       : undefined,
  //   };
  // };

  // const data = {
  //   "@context": "https://schema.org/",
  //   "@type": "ProductGroup",
  //   name: product.name,
  //   description: product.description,
  //   url: productUrl,
  //   brand: {
  //     "@type": "Brand",
  //     name: product.brand,
  //   },
  //   productGroupID: product.id,
  //   variesBy: ["https://schema.org/size", "https://schema.org/color"],
  //   hasVariant: product.variants.map((variant) => handleVariantData(variant)),
  // };

  // return (
  //   <script
  //     type="application/ld+json"
  //     dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  //   />
  // );
};
