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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function IndexPage({ data }) {
  const intl = useIntl();
  return (
    <section id="certify">
      <Swiper
        // effect="coverflow"
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // console.log('index', index, className);
            return `<div class="${className}">${index}</div>`;
          },
        }}
        watchSlidesProgress
        centeredSlides
        onSwiper={(swiper) => (window.swiper = swiper)}
        spaceBetween={50}
        loop
        slidesPerView={'auto'}
        loopedSlides={5}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 1000,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        onProgress={function (progress, a) {
          // console.log('progress', this);
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let slideProgress = this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let translate = slideProgress * modify * 500 + 'px';
            let scale = 1 - Math.abs(slideProgress) / 5;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            slide.transform(
              'translateX(' + translate + ') scale(' + scale + ')',
            );
            // console.log('slide', this.slides[i]);

            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        }}
        onSetTransition={function (transition) {
          // console.log('transition');
          for (var i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }}
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
