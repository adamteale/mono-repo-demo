import { Dimensions } from "react-native";

import { MlProductCardProps, ThemeType } from "@mono-repo-demo/atomic-library";
import { useNavigationContext } from "../../context";
import { MlBannerProps } from "@mono-repo-demo/atomic-library";
import { useTheme } from "styled-components/native";

const { width } = Dimensions.get("window");

export const useHomeViewModel = () => {
  const navigate = useNavigationContext();
  const theme = useTheme() as ThemeType;
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
          uri: "https://pricesmart.bloomreach.io/cdn-cgi/image/fit=scale-down,width=1920,height=900,quality=90,format=webp/https://pricesmart.bloomreach.io/delivery/resources/content/gallery/pricesmart/homepage/fy25/may-2025/ciclo-a/pf-2830-slider-banner-tu.png",
        },
        resizeMode: "contain",
        imageContainerStyles: {
          width: "100%",
          height: "100%",
        },
        style: {
          width: "100%",
          height: "100%",
        },
      },
      title: "Premium mattresses and better sleep ",
      description:
        "Discover top comfort with advanced sleep technology from Serta. Give your home the upgrade it deserves",
      ctaText: "Shop now!",
    },
    {
      banner: {
        source: {
          uri: "https://pricesmart.bloomreach.io/cdn-cgi/image/fit=scale-down,width=1920,height=900,quality=90,format=webp/https://pricesmart.bloomreach.io/delivery/resources/content/gallery/pricesmart/homepage/fy25/apr-2025/ciclo-a/tiresdo_eng.jpg",
        },
        resizeMode: "contain",
        style: {
          width: "100%",
          height: "100%",
        },
      },
      title: "Where will your tires take you on your next adventure?",
      description:
        "Buy 4 matching tires and save RD$6,250 Brands: Bridgestone, Firestone From March 28th to April 27th Restrictions apply",
      ctaText: "Shop now!",
    },
  ];

  return {
    bannerProps,
    productCard,
    onTapNavigateToProductDetail,
  };
};
