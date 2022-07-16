import styled from "styled-components";
import { theme } from "../../globalStyle/theme";
import { FilterItemProps } from "./FilterItem";

export const Dropdown = styled.div<{
  disabled: Boolean;
  filterSearch?: Boolean;
}>`
  min-height: 50px;
  min-width: 175px;
  position: relative;
  background: ${theme.colors.white};
  color: ${theme.colors.purple_blue};
  border-radius: ${(props) => (props.filterSearch ? "0" : "10px")};
  border: none;

  &:hover {
    background: ${(props) => !props.disabled && "rgba(223, 224, 235, 0.41)"};
  }
`;
export const TextReset = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`
export const ButtonDatePicker = styled.div`
  width: 100%;
  background-color: ${theme.colors.grayscale};
  height: 30px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerDatePicker = styled.div`
  position: absolute;
  top: 115%;
`;
export const Header = styled.div<{ disabled: Boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 22px 9px 22px;
  font-size: 14px;
  line-height: 22px;
  cursor: ${(props) => !props.disabled && "pointer"};
  opacity: ${(props) => props.disabled && "0.5"};
`;
export const DateIcon = styled.img`
  padding-left: 10px;
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
export const DropdownIcon = styled.img`
  padding-left: 10px;
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
