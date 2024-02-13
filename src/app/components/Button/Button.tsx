import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

import { buttonStyled } from './Button.styled';
import { ButtonProps } from './ Button.type';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      fullWidth,
      rounded,
      size,
      type = 'button',
      variant = 'primary',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonStyled({ fullWidth, rounded, size, variant }),
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
