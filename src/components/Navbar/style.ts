import styled from "styled-components";
import { theme, device } from "../../globalStyle/theme";

export const NavbarContainer = styled.div`
  height: 75px;
  width: 100%;
  background: ${theme.colors.grayscale};
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SearchContainer = styled.div`
  height: 75px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 82%;

  @media ${device.mobile} {
    width: 30%;
    justify-content: space-around;
  }
`;
export const Logo = styled.img`
  height: 70%;
  padding-left: 20px;
`;
export const PersonalArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 150px;
  align-items: center;
  padding-right: 20px;
  @media ${device.tablet} {
    padding-right: 12px;
  }
  @media ${device.mobile} {
    padding-right: 30px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.colors.purple_blue};
`;
export const IconSearch = styled.img`
  padding-right: 15px;
  padding-left: 15px;
  height: 24px;
  width: 24px;
`;
export const Icon = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 18px;
    height: 16px;
    padding-right: 8px;
  }
`;
export const Avatar = styled.div`
  background: ${theme.colors.primary_blue};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  color: ${theme.colors.white};
  font-size: 14px;
  line-height: 16px;
  position: relative;
  cursor: pointer;

  @media ${device.mobile} {
    width: 35px;
    height: 35px;
  }
`;
export const SignoutBox = styled.div`
  width: 140%;
  height: 15px;
  position: absolute;
  top: 115%;
  color: ${theme.colors.grayscale};
  background: ${theme.colors.white};
  font-family: "Mulish";
  padding: 10px;
  font-size: 12px;
  line-height: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;
