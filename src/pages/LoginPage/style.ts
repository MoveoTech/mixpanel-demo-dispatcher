import styled from "styled-components";
import { COLORS } from "../../globalStyle";
import Button from "../../components/Button/Button";
import { device } from '../../globalStyle';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height:100vh;

    @media ${device.tablet} { 
        flex-direction: column;
        width: 100vw;
    }
`
export const Header = styled.div`
    background: ${COLORS.grayscale};
    width:35%;
    display: flex;
    justify-content: center;
    @media ${device.tablet} { 
        width: 100%;
        height: 35%;
    }
`
export const Logo = styled.img`
    width:50%;
    padding:10px;
    @media ${device.tablet} { 
        height:60%;
        align-self:center;
    }
`
export const Body = styled.div`
    width:65%;
    background: ${COLORS.background_grey};
    display: flex;
    flex-direction:column;
    justify-content: center;
    @media ${device.tablet} { 
        padding-top:25px;
        height: 65%;
        width:100%;
    }
`
export const BodyContainer = styled.div`
    letter-spacing: 0.25px;
    padding: 20px;
    width: 60%;
    font-family: 'Roboto';
    display:flex;
    flex-direction:column;
    @media ${device.tablet} { 
        height:100%;
        width:90%;
        align-items:center;
    }
`
export const Title = styled.div`
    color: ${COLORS.purple_blue};
    font-weight: 300;
    font-size: 32px;
    padding-bottom: 16px;
    @media ${device.mobile} { 
        font-size: 30px;
    }
`
export const Description = styled.div`
    font-weight: 100;
    font-size: 24px;
    padding-bottom: 48px;
    color: ${COLORS.purple_blue};
    border-bottom:1px solid #D9DBE9;
    line-height: 45px;
    @media ${device.tablet} { 
        padding-bottom: 62px;
        text-align:center;
        height:80%;
    }
`
export const ButtonLogin = styled(Button)`
    margin-top:16px;
    width:100%;
    border-radius: 10px;
    @media ${device.tablet} { 
        align-self:flex-end;
        margin-bottom:10px;
    }
`