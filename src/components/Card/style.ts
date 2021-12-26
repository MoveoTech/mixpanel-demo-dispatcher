import styled from "styled-components";
import { device } from "../../variables";
import { COLORS } from "../../variables";
import Button from "../Button/Button";

export const CardStyled = styled.div`
    width: 988px;
    height: 242px;
    background: #FFFFFF;
    border: 1px solid #D9DBE9;
    box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0px 16px 0px 0px; 

    @media ${device.tablet} { 
        width:728px;
    }
    @media ${device.mobile} { 
        width: 343px;
        height: 450px;
        flex-direction: column;
        padding: 0px 0px 16px 0px;
    }
`
export const ImageCard = styled.img`
    height: 242px;
    width: 244px;
    border-radius: 20px 0px 0px 20px;
    object-fit: cover;

    @media ${device.tablet} { 
        height: 242px;
    }
    @media ${device.mobile} { 
        width: 343px;
        height: 450px;
        border-radius: 20px 20px 0px 0px;
    }

`
export const BodyCard = styled.div`
    width: 988px;
    height: 242px;
    display:flex;
    flex-direction: column;
    padding:16px;
    font-size: 14px;
    
    @media ${device.tablet} { 
        width: 728px;
    }
    @media ${device.mobile} { 
        width: 343px;
        height: 450px;
        padding: 0px 16px 0px 16px;
    }
`
export const DateCard = styled.p`
   color: ${COLORS.text_lightblue};
   margin:0px;
`
export const SourceCard = styled.p`
   color: ${COLORS.text_lightblue};
   margin:0px;
`
export const Title = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin:0;
    padding-top: 10px;
    padding-bottom: 10px;
    width:470px;

    @media ${device.mobile} { 
        width:310px;
    }
`
export const Description = styled.p`
    color: ${COLORS.purple_blue};
    margin:0;
    padding-top: 20px;
    height: 50px;

    @media ${device.mobile} { 
        height: 100px;
    }
`
export const CardBtn = styled(Button)`
    position:absolute;
    bottom:16px;
    right:16px;
`
export const TagsContainer = styled.div`
   display:flex;
   flex-direction:row;
`
export const Tag = styled.p`
    color: ${COLORS.purple_blue};
    background: ${COLORS.bright_purple_blue};
    border-radius: 10px;
    padding: 3px 10px;
    margin-left:10px;
    font-family: 'Poppins';
    font-size: 12px;
    line-height: 14px;
`
export const Row = styled.div`
    display:flex;
    justify-content:space-between;
    padding-top:14px;
    align-items:center;
    height:30px;

    @media ${device.mobile} { 
        padding-top:9px;
   }
`