import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const styles = css`
  font-weight: ${(p) => p.theme.typography.button.fontWeight};
  font-size: ${(p) => p.theme.typography.button.fontSize};
  line-height: ${(p) => p.theme.typography.button.lineHeight};
  letter-spacing: ${(p) => p.theme.typography.button.letterSpacing};
  display: inline-block;
  padding: 0.35em 1.2em;
  border: none;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  background-color: ${(p) => p.theme.colors.grey[50]};
  color: ${(p) => p.theme.colors.primary.dark};
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: ${(p) => p.theme.colors.primary.dark};
    color: ${(p) => p.theme.colors.grey[50]};
  }
  &:active {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.35);
  }
`;
export const Button = styled.button`
  ${styles}
`;

export const LinkButton = styled(Link)`
  ${styles}
`;
