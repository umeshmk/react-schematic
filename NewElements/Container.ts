import styled from "styled-components";
import { getContainerCss } from "../css";
import { isUnDef } from "../helper";
import { ContainerResponsive } from "../types";

export const Container = styled.section<ContainerResponsive>`
  margin: 0 auto;

  ${(p) => isUnDef(p.maxWidth) && "max-width:100vw;"}

  ${(p) => getContainerCss(p)}
`;
