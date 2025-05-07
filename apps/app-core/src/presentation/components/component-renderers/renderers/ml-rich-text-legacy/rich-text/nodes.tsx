import React from "react";
import { Text } from "react-native";

import { AtIcon, AtLink } from "@mono-repo-demo/atomic-library";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { CUSTOM_BLOCKS } from "./utils/custom-blocks";
import { RenderNode } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";

export const nodes: RenderNode = {
  [BLOCKS.EMBEDDED_ASSET]: (node) => {
    return (
      <Image
        layout="responsive"
        src={node.data.target.fields.file.url}
        alt={node.data.target.fields.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    );
  },
  [BLOCKS.HEADING_1]: (_node, children) => {
    return <h1 className="lg:text-2xl text-lg mb-2">{children}</h1>;
  },
  [BLOCKS.HEADING_2]: (_node, children) => {
    return <Text className="text-xl">{children}</Text>;
  },
  [BLOCKS.HEADING_3]: (_node, children) => {
    return <Text className="text-lgx">{children}</Text>;
  },
  [BLOCKS.HEADING_4]: (_node, children) => {
    return <h4 className="text-lg">{children}</h4>;
  },
  [BLOCKS.PARAGRAPH]: (node, children) => {
    if (node.content[0].nodeType !== "text" || node.content[0].value !== "")
      return <Text>{children}</Text>;
  },
  [BLOCKS.UL_LIST]: (_node, children) => {
    return <ul className="list-disc list-inside ml-4">{children}</ul>;
  },
  [BLOCKS.LIST_ITEM]: (_node, children) => {
    return <li>{children}</li>;
  },
  [CUSTOM_BLOCKS.ICON_LIST]: (_node, children) => {
    return (
      <ul className="list-none list-inside flex flex-col gap-6">{children}</ul>
    );
  },
  [CUSTOM_BLOCKS.ICON_LIST_ITEM]: (node, children) => {
    const iconType = node.data.icon;

    return (
      <li className="text-base leading-5">
        <AtIcon
          color="disabled-primary"
          type={iconType}
          className="inline-block align-middle mr-4"
        />
        {children}
      </li>
    );
  },
  [INLINES.HYPERLINK]: (node, _children) => {
    return (
      <AtLink
        linkWrapper={Link}
        label={
          (node.content[0].nodeType === "text" ? node.content[0].value : "") ??
          ""
        }
        href={node.data.uri}
        className="inline-flex text-primary underline"
      />
    );
  },
};
