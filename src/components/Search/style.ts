import styled from "styled-components";
import { COLORS } from "../../variables";

export const SearchInput = styled.div`
    width:423px;
    height: 50px;
    border-radius: 10px;
    border-style:solid;
    border-color: ${COLORS.grayscale};
    display:flex;
    flex-direction:row;
    background: ${COLORS.white};
`

export const Input = styled.input`
    width:220px;
    border: 0px solid;
    color: ${COLORS.text_lightblue};
    &:focus{
        outline:none;
    }
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
    }
    &::-webkit-input-placeholder {
        font-size: 14px;
        line-height: 22px;
        color: ${COLORS.text_lightblue};
    }
`
export const Icon = styled.input`
    width: 23px;
    height: 23px;
    padding: 15px 18px 15px 18px;
`