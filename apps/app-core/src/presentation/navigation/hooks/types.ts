import { ProductDetailScreenProps } from "../../screens/ProductDetailScreen";

export interface NavigationService {
  navigateBack: () => void;
  navigateToProductDetail: (props: ProductDetailScreenProps) => void;
}
