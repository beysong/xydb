import { setLocale, useIntl } from 'umi';
import React, { useState } from 'react';
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
  const [now, setNow] = useState(0);
  const intl = useIntl();
  return (
    <section id="certify3">
      <Swiper
        navigation
        watchSlidesProgress
        centeredSlides
        onSwiper={(swiper) => (window.swiper = swiper)}
        // spaceBetween={50}
        loop
        slidesPerView={'auto'}
        loopedSlides={5}
        autoplay
        onProgress={function (swiperItem, a) {
          // console.log('progress', a);

          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let slideProgress = this.slides[i].progress;
            console.log('i', i, slideProgress);

            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let w = window.innerWidth * 0.67 * 0.32;

            let abss = Math.abs(slideProgress);
            // console.log('w', w);
            let translate = '0px';
            if (Math.round(slideProgress)) {
              translate = w * 0.45 * slideProgress * (1 + abss / 3.5) + 'px';
            }

            let scale = abss > 0.001 ? 0.4 * (1 + abss / 10) : 1;
            let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            let deg = (8 * slideProgress) / 4;

            slide.transform(
              'translateX(' +
                translate +
                ') perspective(100px) rotateY(' +
                deg +
                'deg) scale(' +
                scale +
                ')',
            );

            slide.css('zIndex', zIndex);
            slide.css('opacity', 1);
            if (Math.abs(slideProgress) > 3) {
              slide.css('opacity', 0);
            }
          }
        }}
        onSetTransition={function (swiper, transition) {
          setNow(swiper.realIndex);
          // console.log('swiper', swiper);
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }}
      >
        {data.map((v, i) => (
          <SwiperSlide key={i}>
            <div>
              <img src={v} />
            </div>
            <div
              className={`text-center w-full absolute transition-all ${
                now === i ? '-bottom-1/2 visible' : '-bottom-full invisible'
              }`}
            >
              <div
                className="text-lg lg:text-2xl 2xl:text-3xl pb-2"
                style={{ color: '#222' }}
              >
                "前沿智能设施加持"
              </div>
              <div className="text-base xl:text-lg" style={{ color: '#777' }}>
                创享未来科技体验
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
