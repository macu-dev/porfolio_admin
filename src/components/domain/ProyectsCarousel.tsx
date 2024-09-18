/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
'use client';

import { SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import CarouselSwipper from '../ui/carouselSwipper';

const ProyectsCarousel = () => {
  return (
    <>
      <div className="w-100">
        <CarouselSwipper
          className="mySwiper"
          modules={[FreeMode]}
          slidesPerView={3}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
        </CarouselSwipper>
      </div>
    </>
  );
};

export default ProyectsCarousel;
