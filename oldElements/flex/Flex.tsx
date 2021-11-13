import styled, { css } from "styled-components";
import { SFC } from "../../types";

type Media<T> = {
  xs?: T;
  md?: T;
  lg?: T;
};

/**
 * CONTAINER
 */

type Flex = {
  flexDirection?:
    | "row"
    | "column"
    | "row-reverse"
    | "column-reverse"
    | "initial"
    | "inherit";
  wrap?: "wrap" | "nowrap" | "wrap-reverse" | "initial" | "inherit";
  alignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline"
    | "initial"
    | "inherit";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "initial"
    | "inherit";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "initial"
    | "inherit";
};

// RESPONSIVE
type FlexResponsive = {
  direction?: Flex["flexDirection"] | Media<Flex["flexDirection"]>;
  wrap?: Flex["wrap"] | Media<Flex["wrap"]>;
  alignItems?: Flex["alignItems"] | Media<Flex["alignItems"]>;
  alignContent?: Flex["alignContent"] | Media<Flex["alignContent"]>;
  justifyContent?: Flex["justifyContent"] | Media<Flex["justifyContent"]>;
};

const getFlexCss = (p: Flex) => {
  return css`
    ${p.alignContent && `align-content: ${p.alignContent};`}
    ${p.alignItems && `align-items: ${p.alignItems};`}
    ${p.flexDirection && `flex-direction: ${p.flexDirection};`}
    ${p.justifyContent && `justify-content: ${p.justifyContent};`}
    ${p.wrap && `wrap: ${p.wrap};`}
  `;
};

// Use Body instead of .div else we see direction="[Object Object]" in chrome devtools
// export const Flex = styled.div<FlexResponsive>`
const Body: SFC<FlexResponsive> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const Flex = styled(Body)`
  display: flex;

  /* all media */
  ${(p) =>
    getFlexCss({
      flexDirection: typeof p.direction === "string" ? p.direction : undefined,
      wrap: typeof p.wrap === "string" ? p.wrap : undefined,
      justifyContent:
        typeof p.justifyContent === "string" ? p.justifyContent : undefined,
      alignContent:
        typeof p.alignContent === "string" ? p.alignContent : undefined,
      alignItems: typeof p.alignItems === "string" ? p.alignItems : undefined,
    })}

  // media - xs
  ${(p) => p.theme.media.xs} {
    ${(p) =>
      getFlexCss({
        flexDirection:
          typeof p.direction === "object" ? p.direction.xs : undefined,
        wrap: typeof p.wrap === "object" ? p.wrap.xs : undefined,
        justifyContent:
          typeof p.justifyContent === "object"
            ? p.justifyContent.xs
            : undefined,
        alignContent:
          typeof p.alignContent === "object" ? p.alignContent.xs : undefined,
        alignItems:
          typeof p.alignItems === "object" ? p.alignItems.xs : undefined,
      })}
  }
  // media - md
  ${(p) => p.theme.media.md} {
    ${(p) => {
      return getFlexCss({
        flexDirection:
          typeof p.direction === "object" ? p.direction.md : undefined,
        wrap: typeof p.wrap === "object" ? p.wrap.md : undefined,
        justifyContent:
          typeof p.justifyContent === "object"
            ? p.justifyContent.md
            : undefined,
        alignContent:
          typeof p.alignContent === "object" ? p.alignContent.md : undefined,
        alignItems:
          typeof p.alignItems === "object" ? p.alignItems.md : undefined,
      });
    }}
  }

  // media - lg
  ${(p) => p.theme.media.lg} {
    ${(p) => {
      return getFlexCss({
        flexDirection:
          typeof p.direction === "object" ? p.direction.lg : undefined,
        wrap: typeof p.wrap === "object" ? p.wrap.lg : undefined,
        justifyContent:
          typeof p.justifyContent === "object"
            ? p.justifyContent.lg
            : undefined,
        alignContent:
          typeof p.alignContent === "object" ? p.alignContent.lg : undefined,
        alignItems:
          typeof p.alignItems === "object" ? p.alignItems.lg : undefined,
      });
    }}
  }
`;
