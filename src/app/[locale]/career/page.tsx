import TrayectoryItem from '@/components/domain/TrayectoryItem';

const Career = () => {
  return (
    <>
      <h2 className="flex items-center gap-x-4 text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-100">
        trayectoria
      </h2>

      <ol className="relative ml-[11.5px] flex flex-col gap-y-8 border-s border-neutral-400 dark:border-neutral-600">
        <li className="ms-[30px]">
          <TrayectoryItem
            company="compania"
            description="dsds"
            jobDuration="duration"
            jobTitle="title"
          />
        </li>
      </ol>
    </>
  );
};

export default Career;
