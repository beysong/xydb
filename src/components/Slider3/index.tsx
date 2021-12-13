import { setLocale, useIntl } from 'umi';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import './index.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

export default function IndexPage({ data }) {
  const intl = useIntl();
  return (
    <section id="certify3">
      <Swiper
        effect="coverflow"
        navigation
        watchSlidesProgress
        centeredSlides
        onSwiper={(swiper) => (window.swiper = swiper)}
        spaceBetween={50}
        loop
        grabCursor
        slidesPerView={'auto'}
        loopedSlides={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {data.map((v, i) => (
          <SwiperSlide key={i}>
            <div>
              <img src={v} />
            </div>
            <div className="py-20">
              <div className="text-4xl pb-2" style={{ color: '#222' }}>
                "前沿智能设施加持"
              </div>
              <div style={{ color: '#777' }}>创享未来科技体验</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
