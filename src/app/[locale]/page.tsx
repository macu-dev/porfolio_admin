import Image from 'next/image';

import CursorAura from '@/components/domain/CursorAura';
import Header from '@/components/ui/header';

export default function Home() {
  return (
    <>
      <Header logo={<p>Macu</p>} />
      <main className="container mx-auto h-full bg-transparent py-2">
        <section className="h-full px-0 lg:px-8">
          <div className="flex h-full flex-col items-center  justify-evenly max-[1024px]:justify-center sm:px-8  lg:flex-row">
            <div className="animate-slide-up-text max-[1023px]:order-2 lg:max-w-screen-sm">
              <p className="text-default-500 my-2 block w-full max-w-full text-lg font-normal md:w-1/2 min-[768px]:text-[2.1rem] lg:text-xl">
                Hola, mi nombre es
              </p>
              <h1 className="inline bg-gradient-text bg-clip-text text-[2.5rem] font-bold leading-[1.2] tracking-tight text-transparent min-[768px]:text-[4rem] lg:text-7xl">
                Maria Claudia <br /> Perez Escalante
              </h1>
              <h2 className="mt-3 text-[1.5rem] font-semibold min-[768px]:text-[2rem] lg:text-2xl">
                Frontend developer
              </h2>
              <h3 className="my-6 leading-[1.7] text-stone-300 max-[1024px]:my-3  max-[1024px]:text-[1.1rem] min-[768px]:text-[1.6rem] lg:max-w-xl lg:text-lg">
                Mis amigos me dicen Macu, me especializo en dar vida a
                interfaces digitales excepcionales. Mi curiosidad me impulsa a
                perfeccionar cada detalle en mis proyectos.
              </h3>
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

        <CursorAura />
      </main>
    </>
  );
}
