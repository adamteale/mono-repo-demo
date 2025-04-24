import styled from "styled-components/native";

import {
  StyledPressableStyles,
  StyledImageWrapperStyles,
  StyledDetailContainerStyles,
  StyledTitleStyles,
  StyledDescriptionStyles,
} from "./styles";

import { StyledImageWrapperProps, StyledPressableProps } from "./types";

const StyledPressable = styled.View<StyledPressableProps>`
  ${StyledPressableStyles}
`;

const StyledImageWrapper = styled.View<StyledPressableProps>`
  ${StyledImageWrapperStyles}
`;

const StyledDetailContainer = styled.View<StyledImageWrapperProps>`
  ${StyledDetailContainerStyles}
`;

const StyledTitle = styled.Text`
  ${StyledTitleStyles}
`;

const StyledDescription = styled.Text`
  ${StyledDescriptionStyles}
`;

export {
  StyledPressable,
  StyledImageWrapper,
  StyledDetailContainer,
  StyledTitle,
  StyledDescription,
};
