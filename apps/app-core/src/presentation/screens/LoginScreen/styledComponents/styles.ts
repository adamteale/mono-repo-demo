import { ThemeType } from "@mono-repo-demo/atomic-library";
import { css } from "styled-components";

const LoginContainerStyles = css<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  // @media only effects web
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}px) {
    max-width: 576px;
  }
`;

export { LoginContainerStyles };
