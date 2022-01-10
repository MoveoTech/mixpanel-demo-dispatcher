import styled from "styled-components";
import { COLORS } from "../../theme";

export const Dropdown = styled.div`
  position: absolute;
  top: 115%;
  width: 100%;
  background: ${COLORS.white};
  border-radius: 10px;
  border: 1px solid rgba(223, 224, 235, 0.41);
  font-size: 12px;
  line-height: 16px;
  z-index: 2;
`;
export const Container = styled.div`
  overflow: scroll;
  max-height: 130px;
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
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: ${COLORS.purple_blue};
  padding: 0px 16px 0px 16px;
  text-transform: uppercase;
`;

export const ExIcon = styled.img`
  height: 10px;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 16px;
  transition: all 0.2s;
  cursor: pointer;
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;

  &:hover {
    background: rgba(223, 224, 235, 0.41);
  }
`;
export const Item = styled.div`
  width: 90%;
`;
export const ClearBtn = styled.p`
  cursor: pointer;
`;
