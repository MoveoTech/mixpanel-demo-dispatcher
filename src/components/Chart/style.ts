import styled from "styled-components";
import { COLORS } from "../../globalStyle";

export const Container = styled.div`
  width: 412px;
  height: 410px;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  border: 1px solid ${COLORS.secondary_grey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Body = styled.div`
  display: flex;
  height: 90%;
  align-items: flex-end;
  justify-content: center;
`;
export const BoldLine = styled.div`
  border: 2px solid ${COLORS.purple_blue};
  width: 20px;
  border-radius: 5px;
`;
export const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 10px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 25px 5px 25px;
`;
