import styled from "styled-components";
import { getFlexCss } from "../css/FlexCss";
import { isUnDef } from "../helper";
import { FlexResponsiveType } from "../types";

export const Flex = styled.div<FlexResponsiveType>`
  ${(p) => isUnDef(p.display) && "display:flex;"};

  ${(p) => getFlexCss(p)}
`;
