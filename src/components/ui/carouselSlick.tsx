'use client';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider, { Settings } from 'react-slick';
import { forwardRef, memo, ReactNode } from 'react';

interface CarouselProps {
  settings?: Settings;
  children: ReactNode;
}

const defaultSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CarouselSlick = forwardRef<Slider, CarouselProps>(
  ({ settings = {}, children }, ref) => {
    const combinedSettings = { ...defaultSettings, ...settings };

    return (
      <div className="slider-container" style={{ width: '100%' }}>
        <Slider ref={ref} {...combinedSettings}>
          {children}
        </Slider>
      </div>
    );
  },
);

CarouselSlick.displayName = 'CarouselSlick';

export default memo(CarouselSlick);
