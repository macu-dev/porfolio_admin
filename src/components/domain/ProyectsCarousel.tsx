/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
'use client';

import { SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';

import { Proyect } from '@/services/api';

import CarouselSwipper from '../ui/carouselSwipper';

import CardProyect from './CardProyect';

const ProyectsCarousel = ({ proyects }: { proyects: Proyect[] }) => {
  const [isMounted, setIsMounted] = useState(false);
  //usar render dinamic

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="w-100 carousel-swipper px-9 pt-[3rem]">
        <CarouselSwipper
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="swiper-proyect"
          effect={'fade'}
          loop
          modules={[FreeMode, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
        >
          {proyects.map((proyect) => (
            <SwiperSlide key={proyect.id}>
              <CardProyect
                description={proyect.description}
                image={proyect.cover.url}
                tecnologies={proyect.tecnologies}
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
