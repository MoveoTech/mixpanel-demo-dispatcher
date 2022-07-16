import styled from "styled-components";
import { device, theme } from "../../../../globalStyle/theme";

export const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  overflow-x: hidden;
  justify-content: flex-end;
  flex-direction: column-reverse;
  & > div:not(:last-child) {
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    align-self: center;
  }
`;
export const ContainerError = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Text = styled.p`
  color: ${theme.colors.purple_blue};
  font-size: 18px;
  text-align: center;
`;
