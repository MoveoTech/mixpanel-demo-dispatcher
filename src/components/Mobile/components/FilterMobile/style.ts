import styled from "styled-components";
import { theme } from "../../../../globalStyle/theme";

export const ContainerFilter = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid ${theme.colors.secondary_grey};
`;
export const Title = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  color: ${theme.colors.purple_blue};
  font-weight: 500;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 88%;
  font-size: 14px;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.purple_blue};
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const TitleFilter = styled.p`
  font-size: 14px;
  color: ${theme.colors.purple_blue};
`;
export const SortByFilter = styled.div``;
export const FilterIcon = styled.img`
  align-self: flex-end;
  cursor: pointer;
`;
export const Footer = styled.div`
  width: 100%;
  height: 12%;
  background-color: ${theme.colors.background_grey};
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const FilterContainer = styled.div<{ selected: Boolean }>`
  padding: 5px 15px 5px 15px;
  color: ${theme.colors.purple_blue};
  border-bottom: 1px solid ${theme.colors.secondary_grey};
  cursor: pointer;
  background-color: ${(props) => (props.selected && "rgba(90, 90, 137, 0.05)" )};
  &:hover {
    background-color: rgba(90, 90, 137, 0.05);
  }
`;
export const Select = styled.div<{ select: Boolean }>`
  color: ${(props) =>
    props.select ? `rgba(90, 90, 137, 0.85)` : `rgba(90, 90, 137, 0.5)`};
`;
