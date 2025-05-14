import React from "react";
import {
  AtButton,
  AtButtonVariants,
  AtIcon,
} from "@mono-repo-demo/atomic-library";
import { OrSearchBarSize, OrSearchSubmitButtonProps } from "./or-search.types";

export const OrSearchSubmitButton = ({
  onSubmit,
  searchBarSize,
  disabled,
}: OrSearchSubmitButtonProps) => {
  return (
    <AtButton
      className={`absolute right-[0.3125rem] top-20 !rounded ${
        searchBarSize === OrSearchBarSize.LARGE
          ? "max-w-14 max-h-14"
          : "max-w-12 max-h-12"
      } `}
      variant={AtButtonVariants.PRIMARY}
      onClick={(e) =>
        onSubmit(e as React.MouseEvent<HTMLButtonElement, MouseEvent>)
      }
      disabled={disabled}
    >
      <AtIcon
        color={disabled ? "disabled-primary" : "secondary"}
        type="search"
      />
    </AtButton>
  );
};
