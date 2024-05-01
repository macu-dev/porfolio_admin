import Image from 'next/image';

import CursorAura from '@/components/domain/CursorAura';
import Header from '@/components/ui/header';

export default function Home() {
  return (
    <>
      <Header logo={<p>Macu</p>} />
      <main className="container mx-auto h-full bg-transparent py-2">
        <section className="h-full px-8">
          <div className="flex h-full flex-col items-center justify-evenly px-8 md:flex-row md:pb-24">
            <div className="max-w-screen-sm animate-slide-up-text">
              <p className="text-default-500 my-2 block w-full max-w-full text-lg font-normal md:w-1/2 lg:text-xl">
                Hola, mi nombre es
              </p>
              <h1 className="inline bg-gradient-text bg-clip-text text-[2.5rem] font-bold tracking-tight text-transparent lg:text-7xl">
                Maria Claudia <br /> Perez Escalante
              </h1>
              <h2 className="mt-4 text-[1.5rem] font-semibold lg:text-2xl">
                Frontend developer
              </h2>
            </div>
            <div className="animate-open-scale-up-fade">
              <Image
                alt=""
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

        <CursorAura />
      </main>
    </>
  );
}
