import { setLocale, useIntl } from 'umi';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import CountNum from '@/components/CountNum';

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
            <img
              referrerPolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga25a3e66a51f28a738b3dc2bf722c0560c6173a00d688a4805711bf37d1bd601"
            />
            <CountNum />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
