import styled from "styled-components";
import { THEME_COLOR } from "../../constants/color-codes";

export const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: ${THEME_COLOR};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: -1;
`;