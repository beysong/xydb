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

const imgs = [
  {
    title: '独立前台、会议室、储藏间',
    img: 'd8c94e107703953269bc2cf9c1156f79.jpg',
  },
  {
    title: '高品质家具全配，精装入驻',
    img: '495a8d8a157f63bf52eb5218095f1c3d.jpg',
  },
  {
    title: '可容纳 3 0 - 6 0 人团队',
    img: '9ffa3e2009ddcb8598a0008e0df0a062.jpg',
  },
  { title: '24小时VRV空调', img: '57d8b53dcb78a38e1621f3343fd89223.jpg' },
  {
    title: '1 5 0 - 5 0 0 平米户型',
    img: '3d02b8cef288fbc911828eb9d40d8768.jpg',
  },
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section id="certify2">
      <Swiper
        // effect="coverflow"
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // console.log('index', index, className);
            return `<div class="${className}"></div>`;
          },
        }}
        watchSlidesProgress
        centeredSlides
        onSwiper={(swiper) => (window.swiper = swiper)}
        // spaceBetween={50}
        loop
        slidesPerView={'auto'}
        loopedSlides={5}
        autoplay
        onProgress={function (progress, a) {
          // console.log('progress', this);
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            let slideProgress = this.slides[i].progress;
            let modify = 1;
            if (Math.abs(slideProgress) > 1) {
              modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            }
            let w = window.innerWidth * 0.67 * 0.8;
            // console.log('w', w);
            let translate = slideProgress * modify * w + 'px';
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
            if (Math.abs(slideProgress) > 0.5) {
              slide.css('opacity', 0.6);
            }
          }
        }}
        onSetTransition={function (swiper, transition) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.transition(transition);
          }
        }}
      >
        {imgs.map((v, i) => (
          <SwiperSlide key={i}>
            <img
              src={'https://wehome-image.oss-cn-shanghai.aliyuncs.com/' + v.img}
            />
            <div className="absolute text-sm lg:text-lg left-4 bottom-4 xl:left-8 xl:bottom-8 text-white">
              ●{' '}
              {intl.formatMessage({
                id: 'section4.' + v.title,
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
