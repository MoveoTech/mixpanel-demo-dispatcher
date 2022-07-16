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
    flex-grow: ${({ hasFocus }) => hasFocus && 0.5};
  }
`;
export const InputContainer = styled.div`
  border-right: 1px solid ${theme.colors.secondary_grey};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    border-right: none;
  }
`;
export const IconHover = styled.div`
  margin-right: 7px;
  cursor: pointer;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: -10;
  :hover {
    background-color: ${theme.colors.secondary_grey};
  }
`;
export const DeleteIcon = styled.img`
  width: 17px;
  height: 17px;
  text-align: center;
  align-self: center;
`;
export const Input = styled.input`
  width: 70%;
  border: 0;
  font-size: 14px;
  color: ${theme.colors.text_lightblue};

  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 22px;
    color: ${theme.colors.text_lightblue};
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
