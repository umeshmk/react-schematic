import styled from 'styled-components';
import {getCss} from '../css/ContainerCss';
import {createCss} from '../css/createCss';
import {isUnDef} from '../helper';
import {ContainerResponsiveType, MaxWidths, MediaQueries} from '../types';

export const getContainer = (atMedia: MediaQueries, maxWidths: MaxWidths) => {
  const css = getCss(maxWidths);
  const Container = styled.div<ContainerResponsiveType>`
    margin: 0 auto;

    ${(p) => isUnDef(p.maxWidth) && 'max-width:100vw;'}

    ${(p) => createCss(css, p, atMedia)}
  `;

  return Container;
};
