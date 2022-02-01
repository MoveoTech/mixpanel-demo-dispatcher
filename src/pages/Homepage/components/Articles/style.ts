import styled from "styled-components";
import { device, theme } from "../../../../globalStyle/theme";

export const ArticleContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  overflow-x: hidden;
  flex-direction: column-reverse;
  & > div:not(:last-child) {
    margin-bottom: 24px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
    border-radius: 40px;
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }

  @media ${device.tablet} {
    align-self: center;
  }
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
  font-size: 14px;
  text-align: center;
`;
