import styled from "styled-components";
import { theme } from "../../../globalStyle/theme";

export const ProgressBar = styled.div`
  width: 190px;
  height: 12px;
  background-color: ${theme.colors.bright_purple_blue};
  border-radius: 6px;
  margin: 10px 0;
`;
export const ProgressBarUsed = styled.span`
  display: block;
  background: ${theme.colors.primary_blue};
  width: 30px;
  height: 100%;
  border-radius: 6px;
  transition: width 0.5s 0.3s ease;
`;

export const DataContainer = styled.div`
  width: 80%;
  height: 320px;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.purple_blue};
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  color: ${theme.colors.purple_blue};
`;
export const Data = styled.div`
  padding: 8px;
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
`;
export const SourceName = styled.div`
  width: 35%;
  letter-spacing: 0.2px;
`;
export const Precentage = styled.div`
  align-self: center;
  letter-spacing: 0.3px;
  font-weight: 500;
`;
