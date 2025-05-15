import React from "react";

import { LoginScreen } from "@Presentation/screens/LoginScreen/LoginScreen";
import { StatusBar, View } from "react-native";

export default function LoginRoute() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#182958" />
      <LoginScreen />
    </>
  );
}
