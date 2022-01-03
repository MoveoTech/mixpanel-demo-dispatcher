import styled from "styled-components";
import { COLORS, device } from "../../globalStyle";
import Filter from "../Filter/Filter";

export const SearchInput = styled.div`
  height: 50px;
  border-radius: 10px;
  border-style: solid;
  border-color: ${COLORS.grayscale};
  display: flex;
  flex-direction: row;
  background: ${COLORS.white};
  padding: 3px;
  position: relative;
  font-family: "Roboto";
`;
export const FilterSearch = styled(Filter)`
  width: 160px;
  border: none;
`;
export const Input = styled.input`
  width: 240px;
  border: 0;
  color: ${COLORS.text_lightblue};
  border-right: 1px solid ${COLORS.text_hover};
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
    color: ${COLORS.text_lightblue};
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
