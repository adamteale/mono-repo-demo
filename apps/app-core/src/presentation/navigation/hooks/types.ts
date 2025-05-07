import { ProductDetailScreenProps } from "../../screens/ProductDetailScreen";

export interface NavigationService {
  currentRoute: string;
  navigateBack: () => void;
  navigateHome: () => void;
  navigateLogin: () => void;
  navigateToProductDetail: (props: ProductDetailScreenProps) => void;
  navigateToRoute(route: string): void;
}
