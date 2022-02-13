import styled from "styled-components";
import { theme } from "../../../../globalStyle/theme";

export const ContainerFilter = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const Title = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  color: ${theme.colors.purple_blue};
  font-weight: 500;
`;
export const FiltersList = styled.div`

`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SortByFilter = styled.div``;
export const FilterIcon = styled.img``;
