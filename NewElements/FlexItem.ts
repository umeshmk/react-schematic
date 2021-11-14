import styled from "styled-components";
import { getFlexItemCss } from "../css/FlexItemCss";
import { FlexItemResponsiveType } from "../types";

export const FlexItem = styled.div<FlexItemResponsiveType>`
  ${(p) => getFlexItemCss(p)}
`;
