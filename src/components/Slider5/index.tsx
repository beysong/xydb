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

import SectionTitle from '../SectionTitle';

import s1 from './imgs/s1.jpg';
import s2 from './imgs/s2.jpg';
import s3 from './imgs/s3.jpg';
import s4 from './imgs/s4.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const tits = ['十大增值服务', '十大增值服务', '十大增值服务', '十大增值服务'];

const sliser5Data = [s1, s2, s3, s4];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section id="certify5" className="relative">
      <div className="absolute z-10 w-full top-8">
        <SectionTitle title1={'品牌服务'} align="center" color="white" />
      </div>
      <Swiper
        // effect="coverflow"
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            // console.log('index', index, className);
            return `<div class="${className}">${tits[index]}</div>`;
          },
        }}
        watchSlidesProgress
        centeredSlides
        onSwiper={(swiper) => (window.swiper = swiper)}
        spaceBetween={50}
        loop
      >
        {sliser5Data.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v} />
            <div className="absolute text-left top-1/3 left-1/4 text-white">
              <div className="text-2xl">轻公司生态圈</div>
              <div>
                依托优势资源，结合企业发展所需，为企业提供人才、资金融集
                <br />
                品牌推广、法律政策咨询等企业服务，为入驻企业排忧解难，共
                <br />
                同成长
              </div>
              <div>了解更多</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
