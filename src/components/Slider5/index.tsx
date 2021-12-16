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
      <div className="absolute -z-1 lg:z-10 w-full top-8">
        <SectionTitle title1={'品牌服务'} align="center" color="white" />
      </div>
      <Swiper
        // effect="coverflow"

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
            <div className="absolute text-left top-1/3 left-0 2xl:left-1/4 ml-5 lg:ml-0 text-white">
              <div className="text-base 2xl:text-2xl">轻公司生态圈</div>
              <div className="text-xs mt-2 w-11/12 xl:w-1/4">
                依托优势资源，结合企业发展所需，为企业提供人才、资金融集品牌推广、法律政策咨询等企业服务，为入驻企业排忧解难，共
                同成长
              </div>
              <div className="inline-block px-4 py-1 mt-2 text-xs lg:text-base rounded-full border border-solid border-white">
                了解更多
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
