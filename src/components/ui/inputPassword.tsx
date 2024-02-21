import { forwardRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

import { cn } from '@/utils/cn';

import { Input, InputProps } from './input';
import { Button } from './button';

interface InputPasswordProps extends InputProps {
  label?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const disabled =
      props.value === '' || props.value === undefined || props.disabled;

    return (
      <div className="relative">
        <Input
          className={cn('hide-password-toggle pr-10', className)}
          ref={ref}
          type="password"
          {...props}
        />
        <Button
          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
          disabled={disabled}
          onClick={() => setShowPassword((prev) => !prev)}
          size="sm"
          type="button"
          variant="ghost"
        >
          {showPassword && !disabled ? (
            <FaEye aria-hidden="true" />
          ) : (
            <FaEyeSlash aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
      </div>
    );
  },
);

InputPassword.displayName = 'InputPassword';

export { InputPassword };
