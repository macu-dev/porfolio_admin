import { BackpackIcon } from '@radix-ui/react-icons';
import Image from 'next/image';

import initTranslations, { LocaleKey } from '@/app/i18n';
import { Card } from '@/components/ui/card';
import ProyectsCarousel from '@/components/domain/ProyectsCarousel';

const Proyects = async ({
  params: { locale },
}: {
  params: { locale: LocaleKey };
}) => {
  const { t } = await initTranslations(locale, ['trayectory']);

  return (
    <section className="px-2">
      <Image
        alt=""
        className="m-auto"
        height={250}
        src="/computer.gif"
        width={200}
      />
      <h2 className="flex items-center justify-center gap-x-4 text-balance bg-gradient-text bg-clip-text pb-6 text-5xl font-bold text-transparent">
        {t('title')}
      </h2>
      <Card className="mr-auto inline-flex">
        <BackpackIcon className="animate-pulse text-[#6ac0ff]" />
      </Card>
      <ProyectsCarousel />
    </section>
  );
};

export default Proyects;
