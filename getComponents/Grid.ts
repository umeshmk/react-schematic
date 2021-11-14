import styled from 'styled-components';
import {createCss} from '../css/createCss';
import {css} from '../css/GridCss';
import {isUnDef} from '../helper';
import {GridResponsiveType, MediaQueries} from '../types';

export const getGrid = (atMedia: MediaQueries) => {
  const Grid = styled.div<GridResponsiveType>`
    ${(p) => isUnDef(p.display) && 'display:grid;'};

    ${(p) => createCss(css, p, atMedia)}
  `;

  return Grid;
};
