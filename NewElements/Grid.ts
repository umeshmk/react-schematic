import styled from "styled-components";
import { getGridCss } from "../css/GridCss";
import { isUnDef } from "../helper";
import { GridResponsiveType } from "../types";

export const Grid = styled.div<GridResponsiveType>`
  ${(p) => isUnDef(p.display) && "display:grid;"};

  ${(p) => getGridCss(p)}
`;
