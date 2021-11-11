import { setLocale, useIntl } from 'umi';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';
import CountNum from '@/components/CountNum';
import ZuLin from '@/components/ZuLin';
import Img from '@/components/Img';

import s1 from '@/assets/slider/s1.png';
import s2 from '@/assets/slider/s2.png';

import './index.css';
const menus = [{ id: 'home' }, { id: 'project' }];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <main>
      <Header />
      <Slider data={[s1, s2]} />
      <CountNum />
      <Section
        className="py-10"
        hrefid="id1"
        desc={
          <div className="leading-10 my-5">
            <div>
              星光德必易园，定位西安数字文化创新中心，依托西安丰富的文科教资源和创新主体资源，
            </div>
            <div>以高新技术为核心产业，以轻公司生态圈为运营理念，</div>
            <div>
              为企业提供面向未来的智慧办公体验，打造融合科创、文创产业的新高地。
            </div>
          </div>
        }
        title1={
          <div>
            <span className="text-red-400">星月德必WE</span>概况
          </div>
        }
        style={{ backgroundImage: 'url(~@/assets/img/bg1.png)' }}
        full
      >
        <Img src="/images/map.png" />
      </Section>
      <Section
        hrefid="id2"
        full
        style={{ backgroundImage: 'url(~@/assets/img/map.png)' }}
      >
        <div className="flex">
          <div className="w-0 md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2"></div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2 bg-green-300 p-10">
            <SectionTitle title1="区位交通" align="left" color="white" />
            <div className="pt-6">站位拉就是大概拉司空见惯拉设计费</div>
            <div className="pt-6">点击查看</div>
            <div className="pt-6">站位拉就是大概拉司空见惯拉设计费</div>
            <div className="pt-6">站位拉就是大概拉司空见惯拉设计费</div>
            <div className="pt-6">站位拉就是大概拉司空见惯拉设计费</div>
          </div>
        </div>
      </Section>
      <Section
        className="py-10"
        hrefid="id3"
        title1={
          <div>
            <span className="text-red-400">设计</span>理念
          </div>
        }
      >
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-1/2">
            <Img width="100%" src={'/images/demo2.jpg'} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 bg-gray-300 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24">
            <div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Img width="100%" src={'/images/demo.jpg'} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 bg-green-500 text-white py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24">
            <div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Img width="100%" src={'/images/demo.jpg'} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-gray-700 text-white py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24">
            <div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="py-10"
        hrefid="id3"
        title1={
          <div>
            <span className="text-red-400">生态</span>配套
          </div>
        }
        full
        desc={
          <div className="leading-10 my-5">
            <div>
              星光德必易园，定位西安数字文化创新中心，依托西安丰富的文科教资源和创新主体资源，
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap mt-5">
          <div className="w-full lg:w-1/2">
            <Img width="100%" src={'/images/demo2.jpg'} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 bg-gray-300 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24">
            <div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Img width="100%" src={'/images/demo.jpg'} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 bg-green-500 text-white py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24">
            <div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Img width="100%" src={'/images/demo.jpg'} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-gray-700 text-white py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24">
            <div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
              <div>前沿技能石家技术</div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="py-10"
        hrefid="id1"
        desc={
          <div className="leading-10 my-5">
            <div>
              星光德必易园，定位西安数字文化创新中心，依托西安丰富的文科教资源和创新主体资源，
            </div>
            <div>以高新技术为核心产业，以轻公司生态圈为运营理念，</div>
            <div>
              为企业提供面向未来的智慧办公体验，打造融合科创、文创产业的新高地。
            </div>
          </div>
        }
        title1={
          <div>
            <span className="text-red-400">品牌</span>服务
          </div>
        }
        style={{ backgroundImage: 'url(~@/assets/img/bg1.png)' }}
        full
      >
        <Img src="/images/map.png" />
        <div className="container mx-auto">
          <div className=" flex flex-wrap bg-green-700 p-5">
            {[1, 2, 3, 4].map((v) => (
              <div
                key={v}
                className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w-1/4 p-2"
              >
                <div key={v} className="relative">
                  <Img width="100%" src={'/images/demo.jpg'} />
                  <div className="group  absolute bottom-0 left-0 right-0 p-3 text-center text-white text-lg bg-green-500">
                    <div>十大增值服务</div>
                    <div className="opacity-0 group-hover:opacity-60">
                      十大增值服务十大增值服务，十大增值服十大增值服务十大增值服务十大增值服务务
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="py-10"
        title1={
          <div>
            <span className="text-red-400">租赁</span>信息
          </div>
        }
      >
        <ZuLin />
      </Section>
      <Footer />
    </main>
  );
}
