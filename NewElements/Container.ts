import styled from "styled-components";
import { getContainerCss } from "../css/ContainerCss";
import { isUnDef } from "../helper";
import { ContainerResponsiveType } from "../types";

export const Container = styled.section<ContainerResponsiveType>`
  margin: 0 auto;

  ${(p) => isUnDef(p.maxWidth) && "max-width:100vw;"}

  ${(p) => getContainerCss(p)}
`;
