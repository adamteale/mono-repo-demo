import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import {
  HeaderMenuItem,
  HeaderMenuSubItem,
  HeaderMenuSubItemChild,
} from "@components-library/ecommerce";
import Link from "next/link";
import { CMSMenuItem, CMSMenuSubItem } from "@mono-repo-demo/atomic-library";

export const normalizeMenuItem = (
  item?: CMSMenuItem
): HeaderMenuItem | undefined => {
  if (!item?.titleLabel) return undefined;
  const hasChildren = !!item?.children;
  const linkProps: AtLinkProps | undefined =
    item.titleUrl && !hasChildren
      ? { href: item.titleUrl, linkWrapper: Link }
      : undefined;

  return {
    label: item.titleLabel,
    linkProps,
    children: hasChildren
      ? item.children
          ?.map(normalizeMenuSubItem)
          .filter((value): value is HeaderMenuSubItem => !!value)
      : undefined,
  };
};

export const normalizeMenuSubItem = (
  item?: CMSMenuSubItem
): HeaderMenuSubItem | undefined => {
  if (!item?.titleLabel) return;
  const linkProps: AtLinkProps | undefined = item.titleUrl
    ? { href: item.titleUrl, linkWrapper: Link }
    : undefined;
  const hasChildren = !!item.children;

  return {
    label: item.titleLabel,
    linkProps,
    children: hasChildren
      ? (item.children
          .map((child) => {
            if (!child.label || !child.actionUrl) return;
            return {
              label: child.label,
              linkProps: { href: child.actionUrl, linkWrapper: Link },
              isOpen: false,
            };
          })
          .filter(Boolean) as HeaderMenuSubItemChild[])
      : undefined,
  };
};
