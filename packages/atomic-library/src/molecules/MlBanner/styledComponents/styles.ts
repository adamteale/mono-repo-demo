import { css } from "styled-components";
import { ThemeType } from "../../../theme";

import {
  StyledDetailContainerProps,
  StyledImageWrapperProps,
  StyledPressableProps,
} from "./types";

const StyledPressableStyles = css<StyledPressableProps>`
  display: flex;
  flex-direction: row; /* Default to row */
  overflow: hidden;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const StyledImageWrapperStyles = css<StyledImageWrapperProps>`
  position: relative;
  min-width: 0;
  height: 100%;

  flex: 1 1 auto;
  order: 2;

  @media (max-width: 1023px) {
    width: 100%;
    height: 480px;
    flex-basis: auto;
    order: 0;
  }

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledDetailContainerStyles = css<StyledDetailContainerProps>`
  background-color: #f0f5fe;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 15px;
  min-height: 220px;

  flex: 1 1 auto;
  max-width: 960px;
  order: 1;

  @media (max-width: 1023px) {
    width: 100%;
    max-width: none;
    height: auto;
    flex-basis: auto;
    padding: 15px;
    align-items: center;
    text-align: center;
    order: 0;
  }
`;

const StyledTitleStyles = css<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.fontSizes.h3}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) =>
    theme.colors.banner.text ?? "#FFFFFF"}; /* Default white */
`;

const StyledDescriptionStyles = css<{ theme: ThemeType }>`
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  color: ${({ theme }) => theme.colors.banner.text ?? "#FFFFFF"};
`;

export {
  StyledPressableStyles,
  StyledImageWrapperStyles,
  StyledDetailContainerStyles,
  StyledTitleStyles,
  StyledDescriptionStyles,
};
