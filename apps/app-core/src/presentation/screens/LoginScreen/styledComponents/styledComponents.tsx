import styled from "styled-components/native";

import { ThemeType } from "@mono-repo-demo/atomic-library";
import { LoginContainerStyles } from "./styles";

const StyledLoginContainer = styled.View<{ theme: ThemeType }>``
  ${LoginContainerStyles}
`;

export { StyledLoginContainer };
