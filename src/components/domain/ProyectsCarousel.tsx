/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-console */
'use client';

import { SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import CarouselSwipper from '../ui/carouselSwipper';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const ProyectsCarousel = () => {
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
          <SwiperSlide>
            <div>
              <img alt="" src="/emoji.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Card className="w-[100%]">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>sds</p>
                </CardContent>
                <CardFooter className="flex justify-between">vee</CardFooter>
              </Card>
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
