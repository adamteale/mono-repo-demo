import { FlatList, Dimensions } from "react-native";
import styled from "styled-components/native";

import { MlBannerProps } from "@mono-repo-demo/atomic-library";

import { StyledFlatListProps } from "./types";

const StyledNativeFlatList = styled(
  FlatList as new () => FlatList<MlBannerProps>
)<StyledFlatListProps>`
  width: 100%;

  background-color: ${({ theme }: StyledFlatListProps) =>
    theme.colors.background.white};
`;

export { StyledNativeFlatList };
