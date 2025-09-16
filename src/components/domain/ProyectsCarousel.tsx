/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */

import { Proyect } from '@/services/api';

import CardProyect from './CardProyect';

const ProyectsCarousel = ({ proyects }: { proyects: Proyect[] }) => {
  return (
    <>
      <div className="grid gap-4 px-3 pt-[1rem]  sm:grid-cols-1 sm:px-2 md:grid-cols-3  md:px-3 lg:grid-cols-3  lg:gap-4 lg:px-9">
        {proyects.map((proyect) => (
          <CardProyect
            description={proyect.description}
            image={proyect.cover.url}
            key={proyect.id}
            tecnologies={proyect.tecnologies}
            title={proyect.title}
          />
        ))}
      </div>
    </>
  );
};

export default ProyectsCarousel;
