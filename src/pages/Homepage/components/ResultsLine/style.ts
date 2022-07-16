import styled from "styled-components";
import { theme } from "../../../../globalStyle/theme";

export const DefaultHeadline = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${theme.colors.grayscale};
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
`;
export const Headline = styled.div`
  color: rgba(90, 90, 137, 0.5);
  font-size: 14px;
  line-height: 22px;
  padding-top: 12px;
  padding-bottom: 12px;
`;
export const ContainerResultsLine = styled.div`
  min-height: 5%;
`;
