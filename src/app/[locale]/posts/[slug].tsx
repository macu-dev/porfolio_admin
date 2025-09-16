import Image from 'next/image';

import initTranslations, { LocaleKey } from '@/app/i18n';
import ProyectsCarousel from '@/components/domain/ProyectsCarousel';
import { serviceApi } from '@/services/api';

const Posts = async ({
  params: { locale },
}: {
  params: { locale: LocaleKey };
}) => {
  const { t } = await initTranslations(locale, ['proyects']);
  const proyects = await serviceApi.getProyects({ locale });

  // eslint-disable-next-line no-console
  console.log(proyects.data);

  return (
    <>
      <section className="mx-auto px-2 sm:w-[50cqw]">
        <Image
          alt=""
          className="m-auto"
          height={350}
          src="/proyects.png"
          width={350}
        />
        <h2 className="flex items-center justify-center gap-x-4 text-balance bg-gradient-text-yellow bg-clip-text pb-4 text-5xl font-bold text-transparent">
          {t('title')}
        </h2>
        <ProyectsCarousel proyects={proyects.data} />
      </section>
    </>
  );
};

export default Posts;
