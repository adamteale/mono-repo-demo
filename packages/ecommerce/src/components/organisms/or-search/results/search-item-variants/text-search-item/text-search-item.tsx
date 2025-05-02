import { AtLink } from "@mono-repo-demo/atomic-library";
import { TextSearchItemProps } from "./text-search-item.types";

export const TextSearchItem = ({
  link,
  name,
  className = "",
  onClick,
}: TextSearchItemProps) => {
  return (
    <AtLink
      className={`py-3 px-4 text-base leading-5 font-normal text-primary border-b-[0.03125rem] border-tertiary hover:bg-neutral-100 hover:text-primary ${className}`}
      onClick={onClick}
      {...link}
    >
      {name}
    </AtLink>
  );
};
