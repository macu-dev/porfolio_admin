import { BackpackIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

import initTranslations, { LocaleKey } from '@/app/i18n';
import { Card } from '@/components/ui/card';
import { serviceApi } from '@/services/api';
import TrayectoryItem from '@/components/domain/TrayectoryItem';
import { formattedDate } from '@/app/date';

const Proyects = async ({
  params: { locale },
}: {
  params: { locale: LocaleKey };
}) => {
  const trayectory = await serviceApi.getTrayectory({ locale });
  const { t } = await initTranslations(locale, ['trayectory']);

  return (
    <section className="px-2">
      <Image
        alt=""
        className="m-auto"
        height={250}
        src="/computer.gif"
        width={250}
      />
      <h2 className="flex items-center justify-center gap-x-4 text-balance bg-gradient-text bg-clip-text py-6 text-5xl font-bold text-transparent">
        {t('title')}
      </h2>
      <Card className="mr-auto inline-flex">
        <BackpackIcon className="animate-pulse text-[#6ac0ff]" />
      </Card>

      <ol className="relative ml-[11.5px] flex flex-col gap-y-8 border-s border-border pt-[10px]">
        {trayectory.data.map((item) => (
          <li className="ms-[30px]" key={item.id}>
            <TrayectoryItem
              company={item.company}
              description={item.description}
              jobDuration={`
                  ${formattedDate(new Date(item.durationStart), locale)}
                  - 
                  ${
                    item.durationEnd
                      ? formattedDate(new Date(item.durationEnd), locale)
                      : 'Actualmente'
                  }
                `}
              jobTitle={item.job}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Proyects;
