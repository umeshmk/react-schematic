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
