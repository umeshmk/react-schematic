import styled, { css } from "styled-components";
import { SFC } from "../../types";

type Media<T> = {
  xs?: T;
  md?: T;
  lg?: T;
};

/**
 * FLEX ITEM
 */

type Item = {
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | "initial"
    | "inherit";
};

type ItemResponsive = {
  order?: Item["order"] | Media<Item["order"]>;
  flexGrow?: Item["flexGrow"] | Media<Item["flexGrow"]>;
  flexShrink?: Item["flexShrink"] | Media<Item["flexShrink"]>;
  flexBasis?: Item["flexBasis"] | Media<Item["flexBasis"]>;
  alignSelf?: Item["alignSelf"] | Media<Item["alignSelf"]>;
};

const getItemCss = (p: Item) => {
  return css`
    ${p.order && `order: ${p.order};`}
    ${p.flexGrow && `flex-grow: ${p.flexGrow};`}
        ${p.flexBasis && `flex-basis: ${p.flexBasis};`}
        ${p.flexShrink && `flex-shrink: ${p.flexShrink};`}
        ${p.alignSelf && `align-self: ${p.alignSelf};`}
  `;
};

// export const Item = styled.div<ItemResponsive>`
const Body: SFC<ItemResponsive> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const Item = styled(Body)`
  /* all media */
  ${(p) =>
    getItemCss({
      order: typeof p.order === "string" ? p.order : undefined,
      flexGrow: typeof p.flexGrow === "string" ? p.flexGrow : undefined,
      flexBasis: typeof p.flexBasis === "string" ? p.flexBasis : undefined,
      flexShrink: typeof p.flexShrink === "string" ? p.flexShrink : undefined,
      alignSelf: typeof p.alignSelf === "string" ? p.alignSelf : undefined,
    })}

  ${(p) => p.theme.media.xs} {
    ${(p) =>
      getItemCss({
        order: typeof p.order === "object" ? p.order.xs : undefined,
        flexGrow: typeof p.flexGrow === "object" ? p.flexGrow.xs : undefined,
        flexBasis: typeof p.flexBasis === "object" ? p.flexBasis.xs : undefined,
        flexShrink:
          typeof p.flexShrink === "object" ? p.flexShrink.xs : undefined,
        alignSelf: typeof p.alignSelf === "object" ? p.alignSelf.xs : undefined,
      })}
  }

  // media - md
  ${(p) => p.theme.media.md} {
    ${(p) =>
      getItemCss({
        order: typeof p.order === "object" ? p.order.md : undefined,
        flexGrow: typeof p.flexGrow === "object" ? p.flexGrow.md : undefined,
        flexBasis: typeof p.flexBasis === "object" ? p.flexBasis.md : undefined,
        flexShrink:
          typeof p.flexShrink === "object" ? p.flexShrink.md : undefined,
        alignSelf: typeof p.alignSelf === "object" ? p.alignSelf.md : undefined,
      })}
  }

  // media - lg
  ${(p) => p.theme.media.lg} {
    ${(p) =>
      getItemCss({
        order: typeof p.order === "object" ? p.order.lg : undefined,
        flexGrow: typeof p.flexGrow === "object" ? p.flexGrow.lg : undefined,
        flexBasis: typeof p.flexBasis === "object" ? p.flexBasis.lg : undefined,
        flexShrink:
          typeof p.flexShrink === "object" ? p.flexShrink.lg : undefined,
        alignSelf: typeof p.alignSelf === "object" ? p.alignSelf.lg : undefined,
      })}
  }
`;
