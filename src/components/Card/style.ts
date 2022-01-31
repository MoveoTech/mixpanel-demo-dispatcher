import styled from "styled-components";
import { theme, device } from "../../globalStyle/theme";
import Button from "../Button/Button";

export const CardStyled = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.secondary_grey};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 0px;
  margin-right: 10px;
  height:270px;
  margin-bottom: 15px;

  @media ${device.tablet} {
    width: 728px;
  }
  @media ${device.mobile} {
    width: 343px;
    height: 450px;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
  }
`;
export const ImageCard = styled.img`
  height: 100%;
  width: 35%;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;

  @media ${device.tablet} {
    height: 242px;
  }
  @media ${device.mobile} {
    width: 343px;
    height: 150px;
    border-radius: 20px 20px 0px 0px;
  }
`;
export const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  font-size: 14px;
  width: 65%;

  @media ${device.tablet} {
    width: 728px;
  }
  @media ${device.mobile} {
    width: 343px;
    height: 450px;
    padding: 0px 16px 0px 16px;
  }
`;
export const DateCard = styled.p`
  color: ${theme.colors.text_lightblue};
`;
export const SourceCard = styled.p`
  color: ${theme.colors.text_lightblue};
  margin: 0px;
  @media ${device.mobile} {
    padding-left: 16px;
  }
`;
export const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;

  @media ${device.mobile} {
    width: 310px;
    padding: 10px 16px 10px 16px;
  }
`;
export const Description = styled.p`
  color: ${theme.colors.purple_blue};
  margin: 0;
  padding-top: 20px;
  padding-bottom: 15px;
  height: 100%;

  @media ${device.mobile} {
    height: 100px;
    padding: 10px 16px 10px 16px;
  }
`;
export const CardBtn = styled(Button)`
  align-self: flex-end;
  margin-bottom: 10px;
  @media ${device.mobile} {
    align-self: center;
    width: 90%;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Tag = styled.p`
  color: ${theme.colors.purple_blue};
  background: ${theme.colors.bright_purple_blue};
  border-radius: 10px;
  padding: 3px 10px;
  margin-left: 10px;
  font-family: "Poppins";
  font-size: 12px;
  line-height: 14px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  align-items: center;
  height: 30px;

  @media ${device.mobile} {
    padding: 10px 16px 0px 16px;
  }
`;
