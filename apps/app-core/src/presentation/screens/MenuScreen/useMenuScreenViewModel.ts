import { useAuth } from "../../context";

export const useMenuScreenViewModel = () => {
  const { logout } = useAuth();
  const onLogoutTapped = () => {
    console.log("onLogoutTapped");
    logout();
  };

  return {
    onLogoutTapped,
  };
};
