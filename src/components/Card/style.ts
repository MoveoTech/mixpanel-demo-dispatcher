import styled from "styled-components";
import { theme, device } from "../../globalStyle/theme";
import Button from "../Button/Button";

export const CardStyled = styled.div<{ rtl?: boolean }>`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.secondary_grey};
  box-shadow: 0px 32px 16px rgb(0 0 0 / 3%);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  height: 300px;
  margin-bottom: 15px;

  @media ${device.mobile} {
    height: 450px;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
    margin-right: 10px;
  }
`;
export const ImageCard = styled.div`
  height: 100%;
  max-height: 100%;
  width: 35%;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;
  border-right: 1px solid #d9dbe9;

  @media ${device.mobile} {
    width: 100%;
    height: 35%;
    border-radius: 20px 20px 0px 0px;
    border-bottom: 1px solid #d9dbe9;
    border-right: 0;
  }
`;
export const BodyCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline-start: 16px;
  margin-inline-end: 16px;
  font-size: 14px;
  width: 65%;
  height: 100%;
  position: relative;

  @media ${device.mobile} {
    width: 90%;
    height: 65%;
    padding: 0;
  }
`;
export const DateCard = styled.p`
  color: ${theme.colors.text_lightblue};
`;
export const SourceCard = styled.p<{ rtl: boolean }>`
  color: ${theme.colors.text_lightblue};
  margin: 0px;
  display: flex;
`;
export const Title = styled.p<{ rtl: boolean }>`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
`;
export const Description = styled.p<{ rtl: boolean }>`
  color: ${theme.colors.purple_blue};
  margin: 0;
  padding-top: 20px;
  text-decoration: none;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  overflow: hidden;
  font-size: 14px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  display: flex;
`;
export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 35%;
  border-radius: 20px 0px 0px 20px;
  font-size: 14px;
  color: ${theme.colors.purple_blue};
  border-right: 1px solid #d9dbe9;

  @media ${device.mobile} {
    width: 100%;
    height: 36%;
    border-radius: 20px 20px 0px 0px;
    border-right: 0;
    border-bottom: 1.5px solid rgb(168, 166, 181);
  }
`;
export const ImageNotFound = styled.img`
  opacity: 0.5;
  height: 40%;
`;
export const CardBtn = styled(Button)<{ rtl: boolean }>`
  align-self: flex-end;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
  right: ${(props) => props.rtl && "0"};

  @media ${device.mobile} {
    align-self: center;
    width: 90%;
    margin-bottom: 0px;
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
export const Row = styled.div<{ rtl: boolean }>`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  align-items: center;
  height: 30px;
`;
