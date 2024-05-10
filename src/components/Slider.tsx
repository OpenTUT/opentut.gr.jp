import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slider1 from '../assets/Slider1.png';
import Slider2 from '../assets/Slider2.png';
import Slider3 from '../assets/Slider3.png';
import Slider4 from '../assets/Slider4.png';

interface ImageSlide {
  src: string;
  alt: string;
}

const images: ImageSlide[] = [
  { src: Slider1, alt: 'image 1' },
  { src: Slider2, alt: 'image 2' },
  { src: Slider3, alt: 'image 3' },
  { src: Slider4, alt: 'image 4' },
];

function Slider() {
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
      breakpoints={{
        // 320px以上
        320: {
          slidesPerView: 1,
        },
        // 480px以上
        480: {
          slidesPerView: 1,
        },
        // 640px以上
        640: {
          slidesPerView: 3,
        }
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;