import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: ${(p) => p.theme.typography.h1.fontWeight};
  font-size: ${(p) => p.theme.typography.h1.fontSize};
  line-height: ${(p) => p.theme.typography.h1.lineHeight};
  letter-spacing: ${(p) => p.theme.typography.h1.letterSpacing};
`;
export const H2 = styled.h2`
  font-weight: ${(p) => p.theme.typography.h2.fontWeight};
  font-size: ${(p) => p.theme.typography.h2.fontSize};
  line-height: ${(p) => p.theme.typography.h2.lineHeight};
  letter-spacing: ${(p) => p.theme.typography.h2.letterSpacing};
`;
export const H3 = styled.h3`
  font-weight: ${(p) => p.theme.typography.h3.fontWeight};
  font-size: ${(p) => p.theme.typography.h3.fontSize};
  line-height: ${(p) => p.theme.typography.h3.lineHeight};
  letter-spacing: ${(p) => p.theme.typography.h3.letterSpacing};
`;
export const H4 = styled.h4`
  font-weight: ${(p) => p.theme.typography.h4.fontWeight};
  font-size: ${(p) => p.theme.typography.h4.fontSize};
  line-height: ${(p) => p.theme.typography.h4.lineHeight};
  letter-spacing: ${(p) => p.theme.typography.h4.letterSpacing};
`;
export const H5 = styled.h5`
  font-weight: ${(p) => p.theme.typography.h5.fontWeight};
  font-size: ${(p) => p.theme.typography.h5.fontSize};
  line-height: ${(p) => p.theme.typography.h5.lineHeight};
  letter-spacing: ${(p) => p.theme.typography.h5.letterSpacing};
`;
export const Text = styled.p`
  font-weight: ${(p) => p.theme.typography.body.fontWeight};
  font-size: ${(p) => p.theme.typography.body.fontSize};
  line-height: ${(p) => p.theme.typography.body.lineHeight};
  letter-spacing: ${(p) => p.theme.typography.body.letterSpacing};
`;
