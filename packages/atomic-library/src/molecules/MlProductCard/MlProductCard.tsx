import { Image, Pressable, Text, View } from "react-native";

import { MlProductCardProps } from "../..";
import { getStyles } from "./styles";

export const MlProductCard = ({
  availabilityLabel,
  imgUrl,
  onTap,
  onTapAddToCart,
  priceLabel,
  titleLabel,
}: MlProductCardProps) => {
  const styles = getStyles();

  return (
    <Pressable
      onPress={onTap}
      style={styles.container}
      accessibilityRole="button"
    >
      <View>
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title} accessibilityLabel="heading">
          {titleLabel}
        </Text>
        <Text style={[styles.status]}>Available</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Text style={styles.price}>${priceLabel}</Text>
          <Pressable
            accessibilityRole="button"
            onPress={onTapAddToCart}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "#F04123",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 40,
                fontWeight: "400",
                paddingBottom: 40,
                lineHeight: 55,
                textAlign: "center",
              }}
            >
              +
            </Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
