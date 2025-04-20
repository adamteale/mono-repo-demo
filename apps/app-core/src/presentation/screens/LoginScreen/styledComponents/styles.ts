import { ThemeType } from "@mono-repo-demo/atomic-library";
import { css } from "styled-components";

const LoginContainerStyles = css<{ theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  // @media only effects web
  @media (min-width: 600px) {
    max-width: 600px;
  }
`;

export { LoginContainerStyles };
