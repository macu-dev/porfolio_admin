import Image from 'next/image';

import SocialLinks from '@/components/domain/SocialLinks';
import { serviceApi } from '@/services/api';
import BlocksRendererClient from '@/components/domain/BlocksRendererClient';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const data = await serviceApi.getAboutMe({ locale });

  return (
    <>
      <main className="container mx-auto bg-transparent pt-2">
        <section className="h-full px-0 lg:px-8">
          <div className="flex h-full flex-col items-center  justify-evenly max-[1024px]:justify-center sm:px-8  lg:flex-row">
            <div className="animate-slide-up-text max-[1023px]:order-2 lg:max-w-screen-sm">
              <p className="text-default-500 my-2 block w-full max-w-full text-lg font-normal md:w-1/2 min-[768px]:text-[2.1rem] lg:text-xl">
                {data.pretitle}
              </p>
              <h1 className="inline bg-gradient-text bg-clip-text text-[2.5rem] font-bold leading-[1.2] tracking-tight text-transparent min-[768px]:text-[2.5rem] lg:text-6xl">
                {data.title}
              </h1>
              <h2 className="h2-pretitle">{data.subtitle}</h2>

              <BlocksRendererClient content={data?.description} />

              <SocialLinks socialLinks={data.social_media} />
            </div>
            <div className="relative z-0 animate-open-scale-up-fade max-[1023px]:order-1">
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
      </main>
    </>
  );
}
