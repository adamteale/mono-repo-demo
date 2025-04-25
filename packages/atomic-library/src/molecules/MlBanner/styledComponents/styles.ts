import { css } from "styled-components";
import { ThemeType } from "@mono-repo-demo/atomic-library";

import {
  StyledDetailContainerProps,
  StyledImageWrapperProps,
  StyledPressableProps,
} from "./types";

const StyledPressableStyles = css<StyledPressableProps>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  max-width: 1920px;
  align-self: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: row;
    max-height: 480px;
  }
`;

const StyledImageWrapperStyles = css<StyledImageWrapperProps>`
  flex: 1;
  order: 1;
  min-height: ${({ height }) => Math.min(height, 480) ?? "200px"};
  height: ${({ height }) => Math.min(height, 480) ?? "200px"};
  overflow: hidden;

  max-width: 960px;
  max-height: 480px;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    order: 0;
    flex: none;
    width: 100%;
    height: auto;
    min-height: 250px; /* Using Strategy 2: Fixed min-height for stacked */
  }
`;

const StyledDetailContainerStyles = css<StyledDetailContainerProps>`
  flex: 1;
  order: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 15px;
  background-color: ${({ theme }) =>
    theme.colors.background.secondary ?? "#F0F5FE"};
  color: ${({ theme }) => theme.colors.text.primary ?? "#333333"};
  min-height: 220px;

  @media (min-width: ${({ theme }) =>
      theme.breakpoints.xl + 1}px) and (max-width: ${({ theme }) =>
      theme.breakpoints.xxxl}px) {
    max-width: 350px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xxxl}px) {
    max-width: none;
  }
`;

const StyledTitleStyles = css<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.fontSizes.h3}px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary ?? "#333333"};
`;

const StyledDescriptionStyles = css<{ theme: ThemeType }>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.primary ?? "#333333"};
`;

export {
  StyledPressableStyles,
  StyledImageWrapperStyles,
  StyledDetailContainerStyles,
  StyledTitleStyles,
  StyledDescriptionStyles,
};
