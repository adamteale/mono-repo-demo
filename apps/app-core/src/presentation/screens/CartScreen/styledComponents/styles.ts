import { css } from "styled-components";
import { ThemeType } from "@mono-repo-demo/atomic-library";

const StyleAStyles = css<{ theme: ThemeType }>`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: column;
  }
`;

const StyleBStyles = css<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.background.primary};
  height: 400px;
  min-width: 0;

  flex: 1 1 0%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    max-width: none;
    flex-basis: auto;
  }
`;

const StyleCStyles = css<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  height: 400px;

  flex: 1 1 0%;
  max-width: 960px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 100%;
    flex-basis: auto;
  }
`;

export { StyleAStyles, StyleBStyles, StyleCStyles };
