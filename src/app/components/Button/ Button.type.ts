import { VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef } from 'react';

import { buttonStyled } from './Button.styled';

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonStyled>;
