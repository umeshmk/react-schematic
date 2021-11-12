import styled from "styled-components";
import { SFC } from "../types";

type Media<T> = {
  xs?: T;
  md?: T;
  lg?: T;
};
type Size = "xs" | "md" | "lg";
type SizeResponsive = { maxWidth?: Size | Media<Size> };

// export const Container = styled.section<SizeResponsive>`
const Body: SFC<SizeResponsive> = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export const Container = styled(Body)`
  margin: 0 auto;

  // all media
  max-width: ${(p) => typeof p.maxWidth === undefined && "100vw"};
  max-width: ${(p) =>
    typeof p.maxWidth === "string" && p.theme.maxWidth[p.maxWidth]};

  // media - xs
  ${(p) => p.theme.media.xs} {
    max-width: ${(p) =>
      typeof p.maxWidth === "object" && p.maxWidth.xs
        ? p.theme.maxWidth[p.maxWidth.xs]
        : undefined};
  }

  // media - md
  ${(p) => p.theme.media.md} {
    max-width: ${(p) =>
      typeof p.maxWidth === "object" && p.maxWidth.md
        ? p.theme.maxWidth[p.maxWidth.md]
        : undefined};
  }

  // media - lg
  ${(p) => p.theme.media.lg} {
    max-width: ${(p) =>
      typeof p.maxWidth === "object" && p.maxWidth.lg
        ? p.theme.maxWidth[p.maxWidth.lg]
        : undefined};
  }
`;
