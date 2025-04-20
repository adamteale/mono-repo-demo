import styled from "styled-components";

import { StyleAStyles, StyleBStyles, StyleCStyles } from "./styles";

const StyledContainerExample = styled.div`
  ${StyleAStyles}
`;

const StyledB = styled.div`
  ${StyleBStyles}
`;

const StyledC = styled.div`
  ${StyleCStyles}
`;

export { StyledContainerExample, StyledB, StyledC };
