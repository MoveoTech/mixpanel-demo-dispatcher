import styled from "styled-components";
import { COLORS, device } from "../../variables";

export const NavbarContainer = styled.div`
    height: 75px;
    width: 100%;
    background: ${COLORS.grayscale};
    border: none;
    display: flex;
    justify-content:space-between;
    align-items:center;
`
export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    width:82%;

    @media ${device.mobile} { 
        width:30%;
        justify-content:space-around;
    }
`
export const Logo = styled.img`
    height:70%;
    padding-left:20px;
`
export const PersonalArea = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:150px;
    align-items:center;
    padding-right:20px;
    @media ${device.tablet} { 
        padding-right:12px;
    }
    @media ${device.mobile} { 
        padding-right:30px;
    }
`
export const Icon = styled.img`
    height: 24px;
    width: 24px;
    cursor:pointer;
    
    @media ${device.mobile} { 
        width: 18px;
        height: 16px;
        padding-right:8px;
    }
`
export const Avatar = styled.div`
    background: ${COLORS.primary_blue};
    border-radius: 30px;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 50px;
    height: 50px;
    color: ${COLORS.white};
    font-size: 14px;
    line-height: 16px;

    @media ${device.mobile} { 
        width: 35px;
        height: 35px;
    }
`