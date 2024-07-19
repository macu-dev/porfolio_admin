import Image from 'next/image';

import CursorAura from '@/components/domain/CursorAura';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <main className="container mx-auto bg-transparent py-2">
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
              <p className="my-6 leading-[1.8] text-stone-300 max-[1024px]:my-3  max-[1024px]:text-[1.1rem] min-[768px]:text-[1.6rem] lg:max-w-xl lg:text-lg">
                ¡Hola! Soy Macu. Aunque estudié derecho, hace cuatro años
                descubrí mi pasión por crear interfaces digitales excepcionales.
                Vivo en Rosario, Argentina 🇦🇷, pero llevo a Perú en mi corazón.
                Me encantan los retos y siempre busco aprender y crecer. Mi
                objetivo es desarrollar soluciones tecnológicas innovadoras y
                accesibles, transformando cada idea en una experiencia única y
                memorable.
              </p>

              <div className="item-center flex justify-center gap-[10px] p-2">
                <a
                  className={buttonVariants({
                    variant: 'rounded',
                    size: 'icon',
                  })}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="X"
                >
                  <svg
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z" />
                  </svg>
                </a>

                <a
                  className={buttonVariants({
                    variant: 'rounded',
                    size: 'icon',
                  })}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Instagram"
                >
                  <svg
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0" />
                  </svg>
                </a>

                <a
                  className={buttonVariants({
                    variant: 'rounded',
                    size: 'icon',
                  })}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Discord"
                >
                  <svg
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M26.413,6.536c-1.971-.902-4.052-1.543-6.189-1.904-.292,.523-.557,1.061-.793,1.612-2.277-.343-4.592-.343-6.869,0-.236-.551-.5-1.089-.793-1.612-2.139,.365-4.221,1.006-6.194,1.909C1.658,12.336,.596,17.987,1.127,23.558h0c2.294,1.695,4.861,2.984,7.591,3.811,.615-.827,1.158-1.704,1.626-2.622-.888-.332-1.744-.741-2.56-1.222,.215-.156,.425-.316,.628-.472,4.806,2.26,10.37,2.26,15.177,0,.205,.168,.415,.328,.628,.472-.817,.483-1.676,.892-2.565,1.225,.467,.918,1.011,1.794,1.626,2.619,2.732-.824,5.301-2.112,7.596-3.808h0c.623-6.461-1.064-12.06-4.46-17.025Zm-15.396,13.596c-1.479,0-2.702-1.343-2.702-2.994s1.18-3.006,2.697-3.006,2.73,1.354,2.704,3.006-1.192,2.994-2.699,2.994Zm9.967,0c-1.482,0-2.699-1.343-2.699-2.994s1.18-3.006,2.699-3.006,2.723,1.354,2.697,3.006-1.189,2.994-2.697,2.994Z" />
                  </svg>
                </a>
                <a
                  className={buttonVariants({
                    variant: 'rounded',
                    size: 'icon',
                  })}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Github"
                >
                  <svg
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z" />
                  </svg>
                </a>
                <a
                  className={buttonVariants({
                    variant: 'rounded',
                    size: 'icon',
                  })}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Linkedin"
                >
                  <svg
                    height="32"
                    viewBox="0 0 32  32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className={buttonVariants({
                    variant: 'rounded',
                    size: 'icon',
                  })}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Linkedin"
                >
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
                  </svg>
                </a>

                <a
                  className={buttonVariants({
                    variant: 'rounded',
                    size: 'icon',
                  })}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Linkedin"
                >
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                </a>
              </div>
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
