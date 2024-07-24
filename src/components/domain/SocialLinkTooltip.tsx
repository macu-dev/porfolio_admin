import { ReactNode } from 'react';

import { buttonVariants } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export const SocialLinkTooltip = ({
  children,
  link,
  tooltipText,
}: {
  children: ReactNode;
  tooltipText: string;
  link: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a
            className={buttonVariants({
              variant: 'rounded',
              size: 'icon',
            })}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
