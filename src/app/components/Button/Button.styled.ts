import { cva } from 'class-variance-authority';

export const buttonStyled = cva(
  [
    // base
    'inline-flex h-10 touch-none select-none items-center justify-center gap-2 whitespace-nowrap rounded',
    // font
    'font-semibold',
    // transitions
    'transition-opacity duration-300',
    // disabled
    'disabled:cursor-not-allowed disabled:opacity-50',
    // accessibility
    'focus:outline-none focus-visible:focus-ring',
  ],
  {
    variants: {
      fullWidth: {
        true: 'w-full',
      },
      rounded: {
        true: 'rounded-full',
      },
      size: {
        sm: 'h-9 px-2',
        base: 'h-10 px-4',
        lg: 'h-11 px-8',
      },
      variant: {
        primary:
          'bg-indigo-500 text-slate-100 hover:opacity-85 dark:bg-indigo-700 dark:text-slate-200',
        secondary: 'bg-slate-900 text-slate-100 hover:opacity-85',
        outline: 'border bg-transparent text-slate-900 hover:bg-slate-50',
      },
    },
    defaultVariants: {
      size: 'base',
      variant: 'primary',
    },
  },
);
