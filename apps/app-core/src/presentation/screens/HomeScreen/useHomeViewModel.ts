import { Dimensions } from "react-native";

import { MlProductCardProps } from "@mono-repo-demo/atomic-library";
import { useNavigationContext } from "../../context";
import { MlBannerProps } from "@mono-repo-demo/atomic-library";
import { useTheme } from "styled-components/native";

const { width } = Dimensions.get("window");

export const useHomeViewModel = () => {
  const navigate = useNavigationContext();
  const theme = useTheme();
  const onTapNavigateToProductDetail = () => {
    navigate.navigation.navigateToProductDetail({ id: "1234" });
  };

  const productCard: MlProductCardProps = {
    availabilityLabel: "Available",
    imgUrl:
      "https://piratesoftware.wiki/w/images/piratesoftware/thumb/a/ad/Dognut.jpg/300px-Dognut.jpg",
    priceLabel: "3495,00",
    titleLabel: "Member's Selection Freshly Made Assorted Doughnuts 12 Units",
    onTap: () => {
      console.log("onTap");
      onTapNavigateToProductDetail();
    },
    onTapAddToCart: () => {
      console.log("onTapAddToCart");
    },
  };

  // Fake data for the banner
  const bannerProps: MlBannerProps[] = [
    {
      banner: {
        source: {
          uri: "https://pricesmart.bloomreach.io/cdn-cgi/image/fit=scale-down,width=1920,height=900,quality=90,format=webp/https://pricesmart.bloomreach.io/delivery/resources/content/gallery/pricesmart/homepage/fy25/apr-2025/ciclob/pf-2447-wc-april-hp3-ciclo-b.jpg",
        },
        resizeMode: "contain",
        // imageContainerStyles: {
        //   width: width,
        //   height: (width / 960) * 480,
        // },
        imageContainerStyles: {
          width: "100%",
          height: "100%",
        },
        style: {
          width: "100%",
          height: "100%",
        },
      },
      title: "Quality for your pet",
      theme,
      description: "Find food and accesories your pet will love",
      ctaText: "Shop now!",
    },
    {
      banner: {
        source: {
          uri: "https://pricesmart.bloomreach.io/cdn-cgi/image/fit=scale-down,width=1920,height=900,quality=90,format=webp/https://pricesmart.bloomreach.io/delivery/resources/content/gallery/pricesmart/homepage/fy25/apr-2025/ciclob/slidera_7apr25.jpg",
        },
        resizeMode: "contain",
        // imageContainerStyles: {
        //   width: width,
        //   height: (width / 960) * 480,
        // },
        style: {
          width: "100%",
          height: "100%",
        },
      },
      theme,
      title: "Have you seen what's new?",
      description: "You'll love it",
      ctaText: "Shop now!",
    },
  ];

  return {
    bannerProps,
    productCard,
    onTapNavigateToProductDetail,
  };
};
