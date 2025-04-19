import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import { MlProfileCard, MlToast } from "@mono-repo-demo/atomic-library";

import { ProfileScreenProps } from "./types";

export const ProfileScreen = ({}: ProfileScreenProps) => {
  return (
    <SafeAreaView>
      <MlToast title="📍 Pickup at Club Zapote" />

      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.container}
      >
        <View style={styles.cardContainer}>
          <MlProfileCard
            expirationDateLabel={"Mar 14, 2025"}
            membershipNumberLabel={"64012713230001"}
            nameLabel={"JOHN DOE"}
          />
          <View style={styles.timeContainer}>
            <Text style={styles.time}>09:21:29am</Text>
            <Text style={styles.timeSmall}>Aug 19, 2024</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    padding: 20,
    justifyContent: "flex-start",
  },
  container: {
    backgroundColor: "#23376D",
    minHeight: "100%",
  },
  cardContainer: {
    width: "100%",
    paddingTop: 60,
    padding: 20,
    flex: 1,
  },
  pickupToast: {
    fontSize: 20,
    color: "#fff",
    padding: 20,
    backgroundColor: "#173FAB",
  },
  timeContainer: {
    backgroundColor: "#fff",
    maxHeight: 200,
    marginTop: 20,
    borderRadius: 50,
    padding: 10,
  },
  time: {
    fontSize: 50,
    color: "red",
    fontWeight: 700,
    alignSelf: "center",
  },
  timeSmall: {
    fontSize: 20,
    color: "red",
    fontWeight: 700,
    alignSelf: "center",
  },
});
