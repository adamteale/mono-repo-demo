import { ProductDetailScreenProps } from "../../screens/ProductDetailScreen";

export interface NavigationService {
  currentRoute: string;
  navigateBack: () => void;
  navigateToHome: () => void;
  navigateToLogin: () => void;
  navigateToProductDetail: (props: ProductDetailScreenProps) => void;
  navigateToRoute(route: string): void;
}
