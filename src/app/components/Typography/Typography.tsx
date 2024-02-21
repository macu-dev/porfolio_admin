import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

import { typographyStyled } from './Typography.styled';
import { TypographyProps } from './Typography.type';

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
