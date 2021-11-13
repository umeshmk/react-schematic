import styled from "styled-components";
import { createMediaQueries, defaultMaxWidths } from "../createMediaQueries";
import { isStr, isUnDef } from "../helper";
import { ContainerType, ContainerResponsive } from "../types";

const atMedia = createMediaQueries();

type GetCss = {
  [key in keyof ContainerType]: (v) => string;
};

const getCss: GetCss = {
  maxWidth: (key) => key && `max-width: ${defaultMaxWidths[key]}px;`, // key = xs,sm,md....
};

const getAllMediaCss = (mediaKey, p) => {
  return `${atMedia[mediaKey]} { ${getCss.maxWidth(p.maxWidth[mediaKey])} }`;
};

export const Container = styled.section<ContainerResponsive>`
  margin: 0 auto;

  // all media
  ${(p) => isUnDef(p.maxWidth) && "max-width:100vw;"}
  ${(p) => isStr(p.maxWidth) && getCss.maxWidth(p.maxWidth)}

  // media   
  ${(p) => {
    if (typeof p.maxWidth === "object") {
      let mediaCss = Object.keys(atMedia).map((mediaKey) =>
        getAllMediaCss(mediaKey, p)
      );

      return mediaCss;
    }
  }}
`;
