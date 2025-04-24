import styled from "styled-components";

import {
  StyledPressableStyles,
  StyledImageWrapperStyles,
  StyledDetailContainerStyles,
  StyledTitleStyles,
  StyledDescriptionStyles,
} from "./styles";

import {
  StyledDetailContainerProps,
  StyledImageWrapperProps,
  StyledPressableProps,
} from "./types";
import { ThemeType } from "src/theme";

const StyledPressable = styled.div<StyledPressableProps>`
  ${StyledPressableStyles}
`;

const StyledImageWrapper = styled.div<StyledImageWrapperProps>`
  ${StyledImageWrapperStyles}
`;

const StyledDetailContainer = styled.div<StyledDetailContainerProps>`
  ${StyledDetailContainerStyles}
`;

const StyledTitle = styled.div<{ theme: ThemeType }>`
  ${StyledTitleStyles}
`;

const StyledDescription = styled.div<{ theme: ThemeType }>`
  ${StyledDescriptionStyles}
`;

export {
  StyledPressable,
  StyledImageWrapper,
  StyledDetailContainer,
  StyledTitle,
  StyledDescription,
};
