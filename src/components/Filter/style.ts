import styled from "styled-components";
import { COLORS } from "../../theme";

export const Dropdown = styled.div`
  width: 175px;
  position: relative;
  background: ${COLORS.white};
  color: ${COLORS.purple_blue};
  border-radius: 10px;
  border: 1px solid rgba(223, 224, 235, 0.41);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 22px 9px 22px;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
`;
export const Content = styled.div`
  font-family: "Mulish";
  position: absolute;
  top: 115%;
  width: 100%;
  max-height: 126px;
  overflow: scroll;
  background: ${COLORS.white};
  border-radius: 10px;
  border: 1px solid rgba(223, 224, 235, 0.41);
  font-size: 12px;
  line-height: 16px;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.purple_blue};
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }
`;
export const Item = styled.div`
  cursor: pointer;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: all 0.2s;
  &:hover {
    background: rgba(223, 224, 235, 0.41);
  }
`;
