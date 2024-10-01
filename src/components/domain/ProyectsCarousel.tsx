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
    setIsMounted(true); // Solo se monta en el cliente
  }, []);

  if (!isMounted) return null;

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
                img={`${process.env.NEXT_PUBLIC_STRAPI_URL}${proyect.cover.url}`}
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
