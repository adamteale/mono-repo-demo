import React from "react";

import { AtButtonProps } from "@mono-repo-demo/atomic-core";

export const AtButton = ({ title, onAction }: AtButtonProps) => {
  console.log("AtButton", title, onAction);
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      onClick={onAction}
    >
      {title}
    </button>
  );
};
