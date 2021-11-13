import styled from "styled-components";
import { atMedia } from "../mediaQueries";
import { ContainerCss } from "../css";
import { isStr, isUnDef } from "../helper";
import { ContainerResponsive } from "../types";

const { allMediaCss, css } = ContainerCss;

export const Container = styled.section<ContainerResponsive>`
  margin: 0 auto;

  // all media
  ${(p) => isUnDef(p.maxWidth) && "max-width:100vw;"}
  ${(p) => isStr(p.maxWidth) && css.maxWidth(p.maxWidth)}

  // media   
  ${(p) => {
    if (typeof p.maxWidth === "object") {
      let mediaCss = Object.keys(atMedia).map((mediaKey) =>
        allMediaCss(mediaKey, p)
      );

      return mediaCss;
    }
  }}
`;
