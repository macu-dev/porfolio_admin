/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
'use client';

import { SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import { Proyect } from '@/services/api';

import CarouselSwipper from '../ui/carouselSwipper';

import CardProyect from './CardProyect';

const ProyectsCarousel = ({ proyects }: { proyects: Proyect[] }) => {
  return (
    <>
      <div className="w-100">
        <CarouselSwipper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[FreeMode, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
        >
          {proyects.map((proyect) => (
            <SwiperSlide key={proyect.id}>
              <CardProyect
                description={proyect.description}
                title={proyect.title}
              />
            </SwiperSlide>
          ))}
        </CarouselSwipper>
      </div>
    </>
  );
};

export default ProyectsCarousel;
