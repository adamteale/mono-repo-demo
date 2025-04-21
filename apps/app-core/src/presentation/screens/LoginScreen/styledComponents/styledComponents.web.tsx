import styled from "styled-components";
import { LoginContainerStyles } from "./styles";
import { ThemeType } from "@mono-repo-demo/atomic-library";

const StyledLoginContainer = styled.div<{ theme: ThemeType }>`
  ${LoginContainerStyles}
`;

export { StyledLoginContainer };
