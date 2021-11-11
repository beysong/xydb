import { setLocale, useIntl } from 'umi';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './index.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function IndexPage({ data }) {
  const intl = useIntl();
  return (
    <section>
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        spaceBetween={50}
        loop
      >
        {data.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
