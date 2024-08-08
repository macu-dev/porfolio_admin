import Image from 'next/image';

// import CursorAura from '@/components/domain/CursorAura';
import SocialLinks from '@/components/domain/SocialLinks';
import { fetchData } from '@/services/api';

import initTranslations from '../i18n';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ['about']);
  const data = await fetchData(`/api/about-me-page?locale=${locale}`);

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <>
      <main className="container mx-auto bg-transparent py-2">
        <section className="h-full px-0 lg:px-8">
          <div className="flex h-full flex-col items-center  justify-evenly max-[1024px]:justify-center sm:px-8  lg:flex-row">
            <div className="animate-slide-up-text max-[1023px]:order-2 lg:max-w-screen-sm">
              <p className="text-default-500 my-2 block w-full max-w-full text-lg font-normal md:w-1/2 min-[768px]:text-[2.1rem] lg:text-xl">
                {t('pretitle')}
              </p>
              <h1 className="inline bg-gradient-text bg-clip-text text-[2.5rem] font-bold leading-[1.2] tracking-tight text-transparent min-[768px]:text-[4rem] lg:text-7xl">
                Maria Claudia <br /> Perez Escalante
              </h1>
              <h2 className="mt-3 text-[1.5rem] font-semibold min-[768px]:text-[2rem] lg:text-2xl">
                Frontend developer
              </h2>
              <p className="my-6 leading-[1.8] text-stone-300 max-[1024px]:my-3  max-[1024px]:text-[1.1rem] min-[768px]:text-[1.6rem] lg:max-w-xl lg:text-lg">
                {t('text')}
              </p>

              <SocialLinks />
            </div>
            <div className="animate-open-scale-up-fade max-[1023px]:order-1">
              <Image
                alt=""
                className="max-[400px]:h-[200px] max-[400px]:w-[100%]"
                height="500"
                src="/emoji.png"
                style={{
                  maskImage: 'linear-gradient(#bbb2b2 64%, transparent 100%)',
                }}
                width="400"
              />
            </div>
          </div>
        </section>
        {/* <CursorAura /> */}
      </main>
    </>
  );
}
