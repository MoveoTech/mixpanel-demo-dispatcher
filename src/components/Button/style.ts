import styled from "styled-components";
import { theme } from "../../globalStyle/theme";

import { SIZE_TYPE, VARIANT } from "../../utils/types";

import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
  height: 36px;
  width: ${(props) =>
    props.size === SIZE_TYPE.small
      ? `157px`
      : props.size === SIZE_TYPE.large
      ? `714px`
      : "226px"};
  border-radius: 20px;
  background: ${(props) =>
    props.variant === VARIANT.secondery
      ? theme.colors.secondary_grey
      : theme.colors.primary_blue};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background: ${(props) =>
      props.variant === VARIANT.secondery
        ? theme.colors.secondary_grey_hover
        : theme.colors.primary_blue_hover};
  }
`;
export const Label = styled.p`
  text-align: center;
  white-space: pre;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-size: 14px;
  letter-spacing: 0.25px;
  padding-right: 7px;
`;
export const Icon = styled.img`
  height: 17px;
  transform: rotateY(180deg);
  filter: brightness(3);
`;
