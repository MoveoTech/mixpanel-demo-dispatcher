import styled from "styled-components";
import { theme, device } from "../../globalStyle/theme";

export const SearchForm = styled.form<{ hasFocus: boolean }>`
  min-width: 480px;
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
  transition: all 0.45s ease-in-out;
  flex-grow: ${({ hasFocus }) => hasFocus && 0.3};

  @media ${device.tablet} {
    min-width: 380px;
    transition: all 0.5s ease-in-out;
    flex-grow: ${({ hasFocus }) => hasFocus && 1.5};
  }
`;
export const Input = styled.input`
  width: 60%;
  border: 0;
  color: ${theme.colors.text_lightblue};
  border-right: 1px solid ${theme.colors.secondary_grey};
  outline: none;
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
  width: 5%;
  height: 23px;
  padding: 15px 18px 15px 18px;
`;
export const FilterContainer = styled.div`
  width: 175px;
`;
