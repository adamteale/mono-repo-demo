import { Image } from "../../image";
import { Price } from "../../price";
import { DiscountInfo, ProductVariant } from "../../product-variant";

export interface ProductSearchResult {
  id: string;
  name: string;
  slug: string;
  brand?: string;
  description?: string;
  shortDescription?: string;
  categories?: string[];
  price?: Price;
  originalPrice?: Price;
  discountInfo?: DiscountInfo;
  variants?: ProductVariant[];
  image?: Image;
}
