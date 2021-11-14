import styled from 'styled-components';
import {css} from '../css/ContainerCss';
import {createCss} from '../css/createCss';
import {isUnDef} from '../helper';
import {ContainerResponsiveType, MediaQueries} from '../types';

export const getContainer = (atMedia: MediaQueries) => {
  const Container = styled.div<ContainerResponsiveType>`
    margin: 0 auto;

    ${(p) => isUnDef(p.maxWidth) && 'max-width:100vw;'}

    ${(p) => createCss(css, p, atMedia)}
  `;

  return Container;
};
