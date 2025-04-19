import { MlProfileCardProps } from "@mono-repo-demo/atomic-core";
import { Button, Dimensions, Image, Pressable, Text, View } from "react-native";
import { getStyles } from "./styles";
import Barcode from "./Barcode";

export const MlProfileCard = ({
  expirationDateLabel,
  membershipNumberLabel,
  nameLabel,
}: MlProfileCardProps) => {
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Diamond</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.text}>{nameLabel}</Text>
        <Text style={styles.label}>MEMBERSHIP NUMBER</Text>
        <Text style={styles.text}>{membershipNumberLabel}</Text>
        <Text style={styles.label}>EXPIRATION DATE</Text>
        <Text style={[styles.text, styles.success]}>{expirationDateLabel}</Text>

        <Barcode />

        <Text style={styles.textSmall}>
          Personal and non-transferable membership
        </Text>
      </View>
    </View>
  );
};
