import TrayectoryItem from '@/components/domain/TrayectoryItem';
import { serviceApi } from '@/services/api';
import initTranslations, { LocaleKey } from '@/app/i18n';
import { formattedDate } from '@/app/date';

const Career = async ({
  params: { locale },
}: {
  params: { locale: LocaleKey };
}) => {
  const trayectory = await serviceApi.getTrayectory({ locale });
  const { t } = await initTranslations(locale, ['trayectory']);

  return (
    <>
      <h2 className="flex items-center gap-x-4 text-balance bg-gradient-text bg-clip-text py-6 text-5xl font-bold text-transparent">
        {t('title')}
      </h2>
      <ol className="relative ml-[11.5px] flex flex-col gap-y-8 border-s border-neutral-400 dark:border-neutral-600">
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
    </>
  );
};

export default Career;
