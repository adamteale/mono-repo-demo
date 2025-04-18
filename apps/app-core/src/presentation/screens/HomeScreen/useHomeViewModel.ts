import { useNavigationHandler } from "../../navigation/hooks/useNavigationHandler";

export const useHomeViewModel = () => {
  const navigate = useNavigationHandler();

  const onTapNavigateToProductDetail = () => {
    navigate.navigateToProductDetail({});
  };
  return {
    onTapNavigateToProductDetail,
  };
};
