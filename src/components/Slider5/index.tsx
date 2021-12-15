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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const tits = ['十大增值服务', '十大增值服务', '十大增值服务', '十大增值服务'];

const imgs = [
  '40f5f8a03b89df0e9742b22fda496c76.jpg',
  '29c9be012a23347fd57143a1cbae3d09.jpg',
  'b5633292184e907b9294778afbec3b64.jpg',
  'c7058973f6c27138656db878fc5ed8cf.jpg',
];

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
        {imgs.map((v, i) => (
          <SwiperSlide key={i}>
            <img
              src={'https://wehome-image.oss-cn-shanghai.aliyuncs.com/' + v}
            />
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
