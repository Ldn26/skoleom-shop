import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

interface ProductImageSliderProps {
  images: { src: string; alt: string }[];
  productName: string;
}

export default function ProductImageSlider({ images, productName }: ProductImageSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!images.length) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-white/5 text-sm text-white/30">
        Aucune image
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white/5">
        <img
          src={images[0].src}
          alt={images[0].alt || productName}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Swiper
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        className="w-full overflow-hidden rounded-2xl"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-square w-full bg-white/5">
              <img
                src={img.src}
                alt={img.alt || productName}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="w-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="cursor-pointer">
            <div className="aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:border-univ-lime/40">
              <img
                src={img.src}
                alt={img.alt || productName}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
