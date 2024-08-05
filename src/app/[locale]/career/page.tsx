import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Career = () => {
  return (
    <>
      <h2 className="flex items-center gap-x-4 text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-100">
        trayectoria
      </h2>

      <ol className="relative ml-[11.5px] flex flex-col gap-y-8 border-s border-neutral-400 dark:border-neutral-600">
        <li className="ms-[30px]">
          <div className="absolute -start-[6.5px] mt-[8.5px] size-3 rounded-full border border-white bg-neutral-400 dark:border-black dark:bg-neutral-600" />
          <div className="mb-4 flex items-center gap-x-2">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              compania
            </h3>
            <Badge className="rounded-md shadow" variant="secondary">
              badges
            </Badge>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              job.title
            </h4>
            <time className="font-mono text-sm leading-none text-neutral-800 dark:text-neutral-200">
              job.start
            </time>
            <ul className="mt-1 text-pretty font-mono text-neutral-600 dark:text-neutral-400">
              <li>item</li>
            </ul>
          </div>

          <Button
            asChild
            className="mt-4 p-2 shadow"
            size={null}
            variant="default"
          >
            <p className="font-medium">View more</p>
          </Button>
        </li>
        <li className="ms-[30px]">
          <div className="absolute -start-[6.5px] mt-[8.5px] size-3 rounded-full border border-white bg-neutral-400 dark:border-black dark:bg-neutral-600" />
          <div className="mb-4 flex items-center gap-x-2">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              compania
            </h3>
            <Badge className="rounded-md shadow" variant="secondary">
              badges
            </Badge>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              job.title
            </h4>
            <time className="font-mono text-sm leading-none text-neutral-800 dark:text-neutral-200">
              job.start
            </time>
            <ul className="mt-1 text-pretty font-mono text-neutral-600 dark:text-neutral-400">
              <li>item</li>
            </ul>
          </div>

          <Button
            asChild
            className="mt-4 p-2 shadow"
            size={null}
            variant="default"
          >
            <p className="font-medium">View more</p>
          </Button>
        </li>
      </ol>
    </>
  );
};

export default Career;
