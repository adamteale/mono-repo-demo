import { AtButton } from "@mono-repo-demo/atomic-web";
import React from "react";

interface DemoScreenProps {
  message: string;
}

export const DemoScreen: React.FC<DemoScreenProps> = ({ message }) => {
  return (
    <div>
      <h1>Web Demo Screen</h1>
      <p>{message}</p>
      <AtButton onAction={() => console.log("onAction")} title="click" />
    </div>
  );
};
