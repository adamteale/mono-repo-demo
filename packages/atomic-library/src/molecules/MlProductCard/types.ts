import { View } from "react-native";export type MlProductCardProps = {
  availabilityLabel: string;
  imgUrl: string;
  priceLabel: string;
  titleLabel: string;
  onTap: () => void;
  onTapAddToCart: () => void;
};
