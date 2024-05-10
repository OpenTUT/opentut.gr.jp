import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSlide {
  src: string;
  alt: string;
}

export function Slider({ images }: { images: ImageSlide[] }) {
  return (
    <Swiper
      className="
      [&_.swiper-pagination-bullet-active]:!bg-tut-red
      [&_.swiper-pagination-bullet]:h-[11px]
      [&_.swiper-pagination-bullet]:w-[11px]
      [&_.swiper-pagination-bullet]:bg-gray-200
      [&_.swiper-button-prev::after]:text-tut-red
      [&_.swiper-button-next::after]:text-tut-red
    "
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={3}
      spaceBetween={5}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      speed={800}
      loop={true}
    >
      {images.map((image, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
