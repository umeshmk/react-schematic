import styled from "styled-components";
import { createCss } from "../css/createCss";
import { css } from "../css/GridItemCss";
import { GridItemResponsiveType, MediaQueries } from "../types";

export const getGridItem = (atMedia: MediaQueries) => {
  const GridItem = styled.div<GridItemResponsiveType>`
    ${(p) => createCss(css, p, atMedia)}
  `;

  return GridItem;
};
