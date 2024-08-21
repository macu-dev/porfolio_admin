import TrayectoryItem from '@/components/domain/TrayectoryItem';
import { serviceApi } from '@/services/api';

const Career = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const data = await serviceApi.getTrayectory({ locale });

  // eslint-disable-next-line no-console
  console.log(data.data);

  return (
    <>
      <h2 className="flex items-center gap-x-4 text-balance bg-gradient-text bg-clip-text text-5xl font-bold text-transparent">
        Trayectoria
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
