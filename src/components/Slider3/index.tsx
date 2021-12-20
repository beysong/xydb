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

const data = [
  {
    title: '"前沿智能设施加持"',
    desc: '创享未来科技体验',
    img: '44338fa1419cf3d5d1cba60e3ab27416.jpg',
  },
  {
    title: '"前沿智能设施加持"',
    desc: '创享未来科技体验',
    img: '5648752b2e22c1d979933b6d5c551301.jpg',
  },
  {
    title: '"前沿智能设施加持"',
    desc: '创享未来科技体验',
    img: '891d1c44ed176b9e70727e7f996727f4.jpg',
  },
  {
    title: '"前沿智能设施加持"',
    desc: '创享未来科技体验',
    img: 'b44231525e153409e443de754e7b81ef.jpg',
  },
  {
    title: '"前沿智能设施加持"',
    desc: '创享未来科技体验',
    img: '4d8a1f0f7a5172c9e4f935c7d560cd2e.jpg',
  },
];

export default function IndexPage() {
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
              <img
                src={
                  'https://wehome-image.oss-cn-shanghai.aliyuncs.com/' + v.img
                }
              />
            </div>
            <div
              className={`text-center w-full absolute transition-all ${
                now === i
                  ? '-bottom-24 lg:-bottom-28 xl:-bottom-30 2xl:-bottom-44 visible'
                  : '-bottom-full invisible'
              }`}
            >
              <div
                className="text-base lg:text-xl xl:text-2xl pb-2"
                style={{ color: '#222' }}
              >
                {v.title}
              </div>
              <div className="text-sm xl:text-lg" style={{ color: '#777' }}>
                {v.desc}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
