import React from "react";
import { AtIcon } from "@mono-repo-demo/atomic-library";

interface SearchButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  dataTestId?: string;
}

export const SearchButton = ({
  onClick,
  className,
  dataTestId,
}: SearchButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus:outline-none ${className ?? ""}`}
      data-testid={dataTestId}
    >
      <AtIcon type="search" color="active" />
    </button>
  );
};
