import styled from "styled-components";
import { colors } from "../../variables";
import { ButtonProps } from "./Button";

export const Btn = styled.button<ButtonProps>`
    height: 36px;
    width: ${props => ((props.size === 'small') ? `157px` : ((props.size === 'large') ? `714px` : '226px'))};
    border-radius: 20px;
    background: ${props => (props.variant === 'secondary' ? colors.secondary_grey : colors.primary_blue)};
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items:center;
    border: none;
    
    &:hover{
        background: ${props => (props.variant === 'secondary' ? colors.secondary_grey_hover : colors.primary_blue_hover)};
    }
`;
export const Label = styled.p`
@font-face {
    font-family: "Roboto";
    src: url('../../assets/fonts/Roboto-Light.ttf') ;
}
    text-align: center;
    white-space: pre;
    text-transform: uppercase;
    color: white;
    font-size: 14px;
    letter-spacing: 0.25px;
`
export const Icon = styled.img`
    width:30px;
    height:20px;
    transform: rotateY(180deg);
    filter:  invert(100%) sepia(13%) saturate(7488%) hue-rotate(182deg) brightness(121%) contrast(94%);
]
`