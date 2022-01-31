import styled from "styled-components";
import { theme } from "../../globalStyle/theme";
import { FilterProps } from "./Filter";
import { FilterItemProps } from "./FilterItem";

export const Dropdown = styled.div<FilterProps>`
  min-width: 175px;
  position: relative;
  background: ${theme.colors.white};
  color: ${theme.colors.purple_blue};
  border-radius: 10px;
  border: ${(props) =>
    props.border ? "1px solid rgba(223, 224, 235, 0.41)" : "none"};
`;
export const Header = styled.div<FilterProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 22px 9px 22px;
  font-size: 14px;
  line-height: 22px;
  cursor: ${(props) => !props.disabled && "pointer"};
  opacity: ${(props) => props.disabled && "0.5"};
`;
export const Content = styled.div`
  font-family: "Mulish";
  position: absolute;
  top: 115%;
  width: 100%;
  max-height: 126px;
  overflow: auto;
  background: ${theme.colors.white};
  border-radius: 10px;
  border: 1px solid rgba(223, 224, 235, 0.41);
  font-size: 12px;
  line-height: 16px;
  z-index: 2;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.purple_blue};
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }
`;
export const Item = styled.div<FilterItemProps>`
  cursor: pointer;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: all 0.2s;
  background-color: ${(props) =>
    props.selected
      ? `${theme.colors.secondary_grey_hover}`
      : `${theme.colors.white}`};
  &:hover {
    background: ${theme.colors.hover_option};
  }
`;
