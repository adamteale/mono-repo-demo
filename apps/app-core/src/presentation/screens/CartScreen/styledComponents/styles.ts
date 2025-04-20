import { css } from "styled-components";

const StyleAStyles = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: rgb(175, 50, 50);

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const StyleBStyles = css`
  background-color: rgb(37, 162, 166);
  height: 400px;
  min-width: 0;

  flex: 1 1 0%;

  @media (max-width: 1023px) {
    width: 100%;
    max-width: none;
    flex-basis: auto;
    background-color: #4f4f4f;
  }
`;

const StyleCStyles = css`
  background-color: #010101;
  height: 400px;

  flex: 1 1 0%;
  max-width: 960px;

  @media (max-width: 1023px) {
    width: 100%;
    flex-basis: auto;
  }
`;

export { StyleAStyles, StyleBStyles, StyleCStyles };
