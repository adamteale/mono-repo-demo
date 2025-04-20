import styled from "styled-components";

import {
  StyledPressableStyles,
  StyledImageWrapperStyles,
  StyledDetailContainerStyles,
  StyledTitleStyles,
  StyledDescriptionStyles,
} from "./styles";

import { StyledPressableProps } from "./types";

const StyledPressable = styled.div<StyledPressableProps>`
  ${StyledPressableStyles}
`;
const StyledImageWrapper = styled.div`
  ${StyledImageWrapperStyles}
`;

const StyledDetailContainer = styled.div`
  ${StyledDetailContainerStyles}
`;
const StyledTitle = styled.span`
  ${StyledTitleStyles}
`;
const StyledDescription = styled.span`
  ${StyledDescriptionStyles}
`;

export {
  StyledPressable,
  StyledImageWrapper,
  StyledDetailContainer,
  StyledTitle,
  StyledDescription,
};
