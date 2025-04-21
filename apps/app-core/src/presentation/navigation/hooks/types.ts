import { ProductDetailScreenProps } from "../../screens/ProductDetailScreen";

export interface NavigationService {
  navigateBack: () => void;
  navigateHome: () => void;
  navigateLogin: () => void;
  navigateToProductDetail: (props: ProductDetailScreenProps) => void;
}
