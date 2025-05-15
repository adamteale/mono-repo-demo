import React from "react";
import { AtLink, AtLinkProps } from "@mono-repo-demo/atomic-library";

export interface UserIconProps {
  linkProps?: AtLinkProps;
}

export const UserIcon = ({ linkProps }: UserIconProps) => {
  return (
    <AtLink
      {...linkProps}
      className="!text-icon-active !hover:text-icon-active text-text-primary"
      iconProps={{ type: "user" }}
    />
  );
};
