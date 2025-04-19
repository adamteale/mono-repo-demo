import React from "react";

import { AtButton } from "@mono-repo-demo/atomic-web";

export const HomeScreen = ({ message }: DemoScreenProps) => {
  return (
    <div>
      <h1>Web Demo Screen</h1>
      <p>{message}</p>
      <AtButton onAction={() => console.log("onAction")} title="click" />
    </div>
  );
};
