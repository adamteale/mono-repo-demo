"use client";

import React from "react";
import { HomeScreen } from "@Presentation/screens/HomeScreen/HomeScreen";
import { CustomHeader } from "../../../presentation/components/headers/CustomHeader";

export default function HomeTabPage() {
  return (
    <>
      <CustomHeader />
      <HomeScreen />;
    </>
  );
}
