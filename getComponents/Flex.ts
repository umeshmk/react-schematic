import styled from "styled-components";
import { createCss } from "../css/createCss";
import { css } from "../css/FlexCss";
import { isUnDef } from "../helper";
import { FlexResponsiveType, MediaQueries } from "../types";

export const getFlex = (atMedia: MediaQueries) => {
  const Flex = styled.div<FlexResponsiveType>`
    ${(p) => isUnDef(p.display) && "display:flex;"};

    ${(p) => createCss(css, p, atMedia)}
  `;

  return Flex;
};
