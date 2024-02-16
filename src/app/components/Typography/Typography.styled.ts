import { cva } from 'class-variance-authority';

export const typographyStyled = cva(['font-semibold'], {
  variants: {
    size: {
      h1: 'text-4xl',
      h2: 'text-3xl',
      h3: 'text-2xl',
      h4: 'text-xl',
      h5: 'text-lg',
      h6: 'text-base',
      subtitle1: 'text-base',
      subtitle2: 'text-sm',
      overline: 'text-xs',
    },
    variant: {
      primary: 'text-slate-900',
      secondary: 'bg-slate-900 text-slate-100 hover:opacity-85',
      border: 'border bg-transparent text-slate-900 hover:bg-slate-50',
    },
  },
  defaultVariants: {
    size: 'subtitle1',
    variant: 'primary',
  },
});
