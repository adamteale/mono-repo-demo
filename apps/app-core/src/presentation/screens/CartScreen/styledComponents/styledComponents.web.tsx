import styled from "styled-components";

import { StyleAStyles, StyleBStyles, StyleCStyles } from "./styles";
import { ThemeType } from "@mono-repo-demo/atomic-library";

const StyledContainerExample = styled.div<{ theme: ThemeType }>`
  ${StyleAStyles}
`;

const StyledB = styled.div<{ theme: ThemeType }>`
  ${StyleBStyles}
`;

const StyledC = styled.div<{ theme: ThemeType }>`
  ${StyleCStyles}
`;

export { StyledContainerExample, StyledB, StyledC };
