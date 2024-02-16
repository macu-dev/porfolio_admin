import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

import { TypographyProps } from './Typography.type';
import { typographyStyled } from './Typography.styled';

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ component = 'p', className, size, ...props }, ref) => {
    const Component = component;

    return (
      <Component
        className={cn(typographyStyled({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = 'Typography';
