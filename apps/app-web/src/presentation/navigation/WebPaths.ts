export const WebPaths = {
  home: "/",
  cart: "/cart",
  profile: "/profile",
  menu: "/menu",
  login: "/login",

  productDetail: (productId: string): string => {
    return `/products/${productId}/detail`;
  },
};
