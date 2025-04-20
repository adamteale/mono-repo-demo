import styled from "styled-components/native";

import { StyleAStyles, StyleBStyles, StyleCStyles } from "./styles";

const StyledContainerExample = styled.View`
  ${StyleAStyles}
`;

const StyledB = styled.View`
  ${StyleBStyles}
`;

const StyledC = styled.View`
  ${StyleCStyles}
`;

export { StyledContainerExample, StyledB, StyledC };
