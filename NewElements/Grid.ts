import styled from "styled-components";
import { getGridCss } from "../css/GridCss";
import { isUnDef } from "../helper";
import { GridResponsive } from "../types";

export const Grid = styled.div<GridResponsive>`
  ${(p) => isUnDef(p.display) && "display:grid;"};

  ${(p) => getGridCss(p)}
`;
