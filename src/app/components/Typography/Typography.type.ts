import { VariantProps } from 'class-variance-authority';

import { typographyStyled } from './Typography.styled';

export type TypographyProps = VariantProps<typeof typographyStyled> &
  React.HTMLAttributes<HTMLElement> & {
    component?: React.ElementType;
  };
