import styled from "styled-components";
import { COLORS, device } from "../../globalStyle";
import Filter from "../Filter/Filter";

export const SearchInput = styled.div`
    width:423px;
    height: 50px;
    border-radius: 10px;
    border-style:solid;
    border-color: ${COLORS.grayscale};
    display:flex;
    flex-direction:row;
    background: ${COLORS.white};
    padding:3px;
`
export const FilterSearch = styled(Filter)`
    border:none;
`
export const Input = styled.input`
    width:220px;
    border: 0px;
    color: ${COLORS.text_lightblue};
    border-right: 1px solid ${COLORS.text_hover};
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
    @media ${device.tablet} { 
        border-right:none;
    }
`
export const Icon = styled.input`

    width: 23px;
    height: 23px;
    padding: 15px 18px 15px 18px;
`