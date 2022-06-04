import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './styles.module.css';

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
      >
        <SwiperSlide><img src='/tmp/banner-1.png' /></SwiperSlide>
        <SwiperSlide><img src='/tmp/banner-2.png' /></SwiperSlide>
      ...
    </Swiper>
    </div>
  );
}

export default Banner;
