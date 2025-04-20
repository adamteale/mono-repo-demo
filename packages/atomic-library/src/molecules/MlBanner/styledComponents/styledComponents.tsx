import styled from "styled-components/native";

import {
  StyledPressableStyles,
  StyledImageWrapperStyles,
  StyledDetailContainerStyles,
  StyledTitleStyles,
  StyledDescriptionStyles,
} from "./styles";

import { StyledPressableProps } from "./types";

const StyledPressable = styled.View<StyledPressableProps>`
  ${StyledPressableStyles}
`;
const StyledImageWrapper = styled.View`
  ${StyledImageWrapperStyles}
`;

const StyledDetailContainer = styled.View`
  ${StyledDetailContainerStyles}
`;
const StyledTitle = styled.Text`
  ${StyledTitleStyles}
`;
const StyledDescription = styled.View`
  ${StyledDescriptionStyles}
`;

export {
  StyledPressable,
  StyledImageWrapper,
  StyledDetailContainer,
  StyledTitle,
  StyledDescription,
};
