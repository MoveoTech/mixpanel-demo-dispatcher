import styled from "styled-components";
import { theme, device } from "../../globalStyle/theme";

export const HomepageContainer = styled.div`
  background-color: ${theme.colors.bright_purple_blue};
  min-width: 1225px;

  @media ${device.tablet} {
    min-width: 768px;
  }
  @media ${device.mobile} {
    min-width: 480px;
  }
`;
export const MainLayout = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5%;
  min-width: 1225px;
  @media ${device.tablet} {
    min-width: 768px;
  }
  @media ${device.mobile} {
    min-width: 480px;
    margin-left: 8%;
  }
`;
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
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;

  @media ${device.mobile} {
    align-items: center;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  & > div:not(:last-child) {
    margin-bottom: 24px;
  }
`;
