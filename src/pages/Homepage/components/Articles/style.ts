import styled from "styled-components";
import { device, theme } from "../../../../globalStyle/theme";

export const ArticleContainer = styled.div`
  height: 1220px;
  width: 70%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  & > div:not(:last-child) {
    margin-bottom: 24px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }

  @media ${device.tablet} {
    align-self: center;
  }
`;
