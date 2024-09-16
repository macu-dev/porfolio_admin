/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */

import CarouselSlick from '../ui/carouselSlick';

const ProyectsCarousel = () => {
  return (
    <>
      <div className="w-100">
        <CarouselSlick>
          <img alt="" src="/emoji.png" />
          <img alt="" src="/emoji.png" />
          <img alt="" src="/emoji.png" />
        </CarouselSlick>
      </div>
    </>
  );
};

export default ProyectsCarousel;
