import styled from "styled-components";
import { theme } from "../../globalStyle/theme";

export const Dropdown = styled.div`
  width: 175px;
  position: relative;
  background: ${theme.colors.white};
  color: ${theme.colors.purple_blue};
  border-radius: 10px;
  border: 1px solid rgba(223, 224, 235, 0.41);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 22px 9px 22px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
`;
