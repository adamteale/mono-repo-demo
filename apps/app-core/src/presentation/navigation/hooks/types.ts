import { ProductDetailScreenProps } from "../../screens/ProductDetailScreen";

export interface NavigationService {
  navigationRef: any | undefined;
  navigationIsReady: boolean;
  navigateBack: () => void;
  navigateToProductDetail: (props: ProductDetailScreenProps) => void;
}
