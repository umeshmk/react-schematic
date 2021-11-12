import styled, { css } from "styled-components";
import { SFC } from "../types";

type Media = {
  xs?: string;
  md?: string;
  lg?: string;
};

/**
 * GRID CONTAINER
 */
type Content =
  | "normal"
  | "center"
  | "start"
  | "end"
  | "space-evenly"
  | "space-between"
  | "space-around";

type MediaContent = {
  xs?: Content;
  md?: Content;
  lg?: Content;
};

interface Grid {
  rows?: string;
  cols?: string;
  justifyContent?: Content;
  alignContent?: Content;
  gap?: string;
  rowGap?: string;
  colGap?: string;
}

interface GridResponsive {
  rows?: Media | string;
  cols?: Media | string;
  justifyContent?: MediaContent | Content;
  alignContent?: MediaContent | Content;
  gap?: Media | string;
  rowGap?: Media | string;
  colGap?: Media | string;
}

// RESPONSIVE
const getGridCss = (p: Grid) => {
  return css`
    ${p.cols && `grid-template-columns: repeat(${p.cols}, 1fr);`}
    ${p.rows && `grid-template-rows: repeat(${p.rows}, 1fr);`}
    ${p.gap && `grid-gap: ${p.gap};`}
    ${p.rowGap && `row-gap: ${p.rowGap};`}
    ${p.colGap && `col-gap: ${p.colGap};`} 
    ${p.justifyContent && `justify-content:${p.justifyContent};`}
    ${p.alignContent && `align-content:${p.alignContent};`}
  `;
};

// Container
// export const Grid = styled.div<GridResponsive>`
const Body: SFC<GridResponsive> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const Grid = styled(Body)`
  display: grid;

  // all media
  ${(p) =>
    getGridCss({
      rows: typeof p.rows === "string" ? p.rows : undefined,
      cols: typeof p.cols === "string" ? p.cols : undefined,
      justifyContent:
        typeof p.justifyContent === "string" ? p.justifyContent : undefined,
      alignContent:
        typeof p.alignContent === "string" ? p.alignContent : undefined,
      gap: typeof p.gap === "string" ? p.gap : undefined,
      colGap: typeof p.colGap === "string" ? p.colGap : undefined,
      rowGap: typeof p.rowGap === "string" ? p.rowGap : undefined,
    })}

  // media - xs
  ${(p) => p.theme.media.xs} {
    ${(p) =>
      getGridCss({
        rows: typeof p.rows === "object" ? p.rows.xs : undefined,
        cols: typeof p.cols === "object" ? p.cols.xs : undefined,
        justifyContent:
          typeof p.justifyContent === "object"
            ? p.justifyContent.xs
            : undefined,
        alignContent:
          typeof p.alignContent === "object" ? p.alignContent.xs : undefined,
        gap: typeof p.gap === "object" ? p.gap.xs : undefined,
        colGap: typeof p.colGap === "object" ? p.colGap.xs : undefined,
        rowGap: typeof p.rowGap === "object" ? p.rowGap.xs : undefined,
      })}
  }

  // media - md
  ${(p) => p.theme.media.md} {
    ${(p) =>
      getGridCss({
        rows: typeof p.rows === "object" ? p.rows.md : undefined,
        cols: typeof p.cols === "object" ? p.cols.md : undefined,
        justifyContent:
          typeof p.justifyContent === "object"
            ? p.justifyContent.md
            : undefined,
        alignContent:
          typeof p.alignContent === "object" ? p.alignContent.md : undefined,
        gap: typeof p.gap === "object" ? p.gap.md : undefined,
        colGap: typeof p.colGap === "object" ? p.colGap.md : undefined,
        rowGap: typeof p.rowGap === "object" ? p.rowGap.md : undefined,
      })}
  }

  // media - lg
  ${(p) => p.theme.media.lg} {
    ${(p) =>
      getGridCss({
        rows: typeof p.rows === "object" ? p.rows.lg : undefined,
        cols: typeof p.cols === "object" ? p.cols.lg : undefined,
        justifyContent:
          typeof p.justifyContent === "object"
            ? p.justifyContent.lg
            : undefined,
        alignContent:
          typeof p.alignContent === "object" ? p.alignContent.lg : undefined,
        gap: typeof p.gap === "object" ? p.gap.lg : undefined,
        colGap: typeof p.colGap === "object" ? p.colGap.lg : undefined,
        rowGap: typeof p.rowGap === "object" ? p.rowGap.lg : undefined,
      })}
  }
`;

/**
 * GRID ITEM
 */
type Item = {
  gridCol?: string;
  gridRow?: string;
};

type ItemResponsive = {
  gridCol?: string | Media;
  gridRow?: string | Media;
};
const getItemCss = (p: Item) => {
  return css`
    ${p.gridCol && `grid-column: ${p.gridCol};`}
    ${p.gridRow && `grid-row: ${p.gridRow};`}
  `;
};

// Item
// export const GridItem = styled.div<ItemResponsive>`
const ItemBody: SFC<ItemResponsive> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const GridItem = styled(ItemBody)`
  // all media
  ${(p) =>
    getItemCss({
      gridCol: typeof p.gridCol === "string" ? p.gridCol : undefined,
      gridRow: typeof p.gridRow === "string" ? p.gridRow : undefined,
    })}

  // media - xs
  ${(p) => p.theme.media.xs} {
    ${(p) =>
      getItemCss({
        gridCol: typeof p.gridCol === "object" ? p.gridCol.xs : undefined,
        gridRow: typeof p.gridRow === "object" ? p.gridRow.xs : undefined,
      })}
  }

  // media - md
  ${(p) => p.theme.media.md} {
    ${(p) =>
      getItemCss({
        gridCol: typeof p.gridCol === "object" ? p.gridCol.md : undefined,
        gridRow: typeof p.gridRow === "object" ? p.gridRow.md : undefined,
      })}
  }

  // media - lg
  ${(p) => p.theme.media.lg} {
    ${(p) =>
      getItemCss({
        gridCol: typeof p.gridCol === "object" ? p.gridCol.lg : undefined,
        gridRow: typeof p.gridRow === "object" ? p.gridRow.lg : undefined,
      })}
  }
`;
