import { Button } from '../ui/button';

interface TrayectoryItemProps {
  company: string;
  jobTitle: string;
  jobDuration: string;
  description: string;
}

const TrayectoryItem = ({
  company,
  jobTitle,
  jobDuration,
  description,
}: TrayectoryItemProps) => {
  return (
    <>
      <div className="absolute -start-[6.5px] mt-[8.5px] size-3 rounded-full border border-white bg-neutral-400 dark:border-black dark:bg-neutral-600" />
      <div className="mb-4 flex items-center gap-x-2">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
          {company}
        </h3>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {jobTitle}
        </h4>
        <time className="font-mono text-sm leading-none text-neutral-800 dark:text-neutral-200">
          {jobDuration}
        </time>
        <div className="mt-1 text-pretty font-mono text-neutral-600 dark:text-neutral-400">
          {description}
        </div>
      </div>

      <Button asChild className="mt-4 p-2 shadow" size={null} variant="default">
        <p className="font-medium">View more</p>
      </Button>
    </>
  );
};

export default TrayectoryItem;
