import styled from "styled-components";
import { theme, device } from "../../globalStyle/theme";

export const SearchInput = styled.div`
  height: 50px;
  border-radius: 10px;
  border-style: solid;
  border-color: ${theme.colors.grayscale};
  display: flex;
  flex-direction: row;
  background: ${theme.colors.white};
  padding: 3px;
  position: relative;
  font-family: "Roboto";
`;
export const Input = styled.input`
  width: 240px;
  border: 0;
  color: ${theme.colors.text_lightblue};
  border-right: 1px solid ${theme.colors.secondary_grey};
  outline: none;
  transition: width 0.35s ease-in-out;
  &:focus {
    width: 500px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 22px;
    color: ${theme.colors.text_lightblue};
  }
  @media ${device.tablet} {
    border-right: none;
  }
`;
export const Icon = styled.input`
  width: 23px;
  height: 23px;
  padding: 15px 18px 15px 18px;
`;
