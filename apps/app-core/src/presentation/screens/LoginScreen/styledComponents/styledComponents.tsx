import styled from "styled-components/native";
import { LoginContainerStyles } from "./styles";
import { ThemeType } from "@mono-repo-demo/atomic-library";

const StyledLoginContainer = styled.View<{ theme: ThemeType }>`
  ${LoginContainerStyles}
`;

export { StyledLoginContainer };
