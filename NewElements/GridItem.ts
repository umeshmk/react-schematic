import styled from "styled-components";
import { getGridItemCss } from "../css/GridItemCss";
import { GridItemResponsiveType } from "../types";

export const GridItem = styled.div<GridItemResponsiveType>`
  ${(p) => getGridItemCss(p)}
`;
