import styled from "styled-components";
import { COLORS } from "../../variables";

export const Dropdown = styled.div`
     width: 190px;
     height: 50px;
     margin: 100px auto;
    position:relative;
     background: ${COLORS.white};
     color: ${COLORS.purple_blue};
     border-radius: 10px;
     border: 1px solid rgba(223, 224, 235, 0.41);
`
export const Header = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding:16px 22px 9px 22px;
    font-size: 14px;
    line-height: 22px;
`
export const Content = styled.div`
    font-family: 'Mulish';
    position:absolute;
    top:115%;
    width: 100%;
    height:126px;
    overflow: scroll;
    background: ${COLORS.white};
    border-radius: 10px;
    border: 1px solid rgba(223, 224, 235, 0.41);
    font-size: 12px;
    line-height: 16px;
    ::-webkit-scrollbar {
        width: 3px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${COLORS.purple_blue};
    }
`
export const Item = styled.div`
    padding-left:16px;
    padding-bottom: 10px;
    cursor:pointer;
    transition: all 0.2s;

    &:first-child{
        padding-top:10px;
    }
    &:hover{
        background:rgba(223, 224, 235, 0.41);
    }
`
