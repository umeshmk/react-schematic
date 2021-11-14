import styled from 'styled-components';
import {createCss} from '../css/createCss';
import {css} from '../css/FlexItemCss';
import {FlexItemResponsiveType, MediaQueries} from '../types';

export const getFlexItem = (atMedia: MediaQueries) => {
  const FlexItem = styled.div<FlexItemResponsiveType>`
    ${(p) => createCss(css, p, atMedia)}
  `;

  return FlexItem;
};
