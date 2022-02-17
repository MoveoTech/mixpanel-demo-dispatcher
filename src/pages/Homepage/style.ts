import styled from "styled-components";
import { theme, device } from "../../globalStyle/theme";

export const HomepageContainer = styled.div`
  background-color: ${theme.colors.bright_purple_blue};
  min-width: 1200px;
  height: 100%;
  overflow: scroll;
  @media ${device.tablet} {
    min-width: 600px;
  }
  @media ${device.mobile} {
    min-width: 375px;
  }
`;
export const MainLayout = styled.div`
  width: 70%;
  height: 900px;
  min-height: 900px;
  margin-left: auto;
  margin-right: auto;
  min-width: 80%;

  @media ${device.tablet} {
    min-width: 90%;
    height: 100%;
    min-height: 100%;
  }
`;
export const TextMsg = styled.div`
padding-top: 10px;
  font-size: 14px;
  color: ${theme.colors.purple_blue};
`
export const ArticlesContainer = styled.div`
  width: 100%;
`;
export const SearchContainer = styled.div``;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  border-bottom: 1px solid #d9dbe9;
  padding-top: 20px;
  padding-bottom: 20px;

  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;
export const BodyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-bottom: 50px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
`;
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  & > div:not(:last-child) {
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    padding-left: 0px;
  }
`;
