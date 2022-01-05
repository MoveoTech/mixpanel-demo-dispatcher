import styled from "styled-components";
import { COLORS, COLORS_DOUGHNUT } from "../../../globalStyle";

export const DataContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  padding: 0px 15px 10px 15px;
`;
export const PieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;
export const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 5px;
`;
export const Data = styled.div`
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Mulish";
  font-size: 16px;
  line-height: 20px;
`;
export const SourceName = styled.div`
  letter-spacing: 0.2px;
  color: ${COLORS.black};
`;
export const Precentage = styled.div`
  color: ${COLORS_DOUGHNUT.gray};
  letter-spacing: 0.3px;
`;
