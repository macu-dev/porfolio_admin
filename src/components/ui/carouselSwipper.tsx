// import Swiper JS
'use client';

import { Swiper, SwiperProps } from 'swiper/react';
import { ReactNode } from 'react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';

const CarouselSwipper = ({
  children,
  ...props
}: SwiperProps & { children: ReactNode }) => {
  return (
    <Swiper
      {...props}
      keyboard={true}
      modules={[...(props.modules || []), Pagination, Navigation]}
      mousewheel={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
      {children}
    </Swiper>
  );
};

export default CarouselSwipper;
