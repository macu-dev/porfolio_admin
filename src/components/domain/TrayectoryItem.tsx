import { BlocksContent } from '@strapi/blocks-react-renderer';

import { buttonVariants } from '../ui/button';

import BlocksRendererClient from './BlocksRendererClient';

interface TrayectoryItemProps {
  company: string;
  jobTitle: string;
  jobDuration: string;
  description: BlocksContent;
  link?: string;
}

const TrayectoryItem = ({
  company,
  jobTitle,
  jobDuration,
  description,
  link,
}: TrayectoryItemProps) => {
  return (
    <>
      <div className="absolute -start-[6.5px] mt-[8.5px] size-3 rounded-full border-r border-border bg-gradient-dark" />
      <div>
        <h3 className="text-xl font-bold text-neutral-100">{jobTitle}</h3>
        <div className="mb-1 flex items-center gap-x-2">
          <h4 className="text-lg font-medium text-neutral-100">{company}</h4>
        </div>

        <time className="font-mono text-xs leading-none  text-neutral-200">
          {jobDuration}
        </time>
        <div>
          <BlocksRendererClient content={description} />
        </div>
      </div>
      {link && (
        <a
          className={buttonVariants({
            variant: 'default',
            size: null,
            className: 'mt-4 p-2 font-medium shadow',
          })}
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          View more
        </a>
      )}
    </>
  );
};

export default TrayectoryItem;
