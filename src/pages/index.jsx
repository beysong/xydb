import { setLocale, useIntl } from 'umi';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import Slider2 from '@/components/Slider2';
import Slider3 from '@/components/Slider3';
import Slider4 from '@/components/Slider4';
import Slider5 from '@/components/Slider5';
import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';
import CountNum from '@/components/CountNum';
import ZuLin from '@/components/ZuLin';
import Img from '@/components/Img';

import s1 from '@/assets/slider/s1.png';
import s2 from '@/assets/slider/s2.png';

import icon1 from '@/assets/icon1.png';

import './index.css';

export default function IndexPage() {
  const intl = useIntl();
  return (
    <main>
      <a href="" id="id0"></a>
      <Header />
      {/* <OverPack>
        <div className="container mx-auto relative">
          <div
            className="fixed w-1/4 z-10 p-2 rounded-lg transition-all"
            style={{
              backgroundColor: 'rgba(255,255,255,0.19)',
              top: '30%',
              right: '10%',
            }}
          >
            <div
              className="bg-white p-8 w-full rounded-lg overflow-hidden"
              style={{
                // filter: 'blur(10px)',
                backgroundColor: 'rgba(255,255,255,0.93)',
              }}
            >
              <div>
                <input
                  className="rounded-sm p-2 text-center w-full"
                  style={{
                    border: '1px solid #D1DDDD',
                  }}
                  type="text"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <input
                  className="rounded-sm p-2 text-center w-full mt-2"
                  style={{
                    border: '1px solid #D1DDDD',
                  }}
                  type="text"
                  placeholder="请输入您的手机号"
                />
              </div>
              <div>
                <button
                  style={{ backgroundColor: '#3DB2AD' }}
                  className="text-center p-2 text-white w-full mt-5"
                >
                  立即免费预约参观
                </button>
              </div>
              <div className="text-center text-gray-400 mt-2 text-md">
                <span>我们的专业顾问会尽快与您联系</span>
              </div>
            </div>
          </div>
        </div>
      </OverPack> */}

      <Slider data={[s1, s2]} />
      <Slider4 data={[s1, s1, s2, s2]} />
      <CountNum />
      <Section
        className="pt-28"
        hrefid="menu.项目介绍"
        desc={
          <div className="leading-8 my-10 text-base" style={{ color: '#666' }}>
            <div>星月德必WE"，位于虹桥商务区核心区，总建筑面积53,000m²</div>
            <div>立足虹桥国际开放枢纽国家级规划</div>
            <div>
              打造长三角数字科技创新中心，为上海及长三角数字创意企业提供最优化的办公环境和资源链接平台。
            </div>
          </div>
        }
        title1={
          <div>
            <span className="text-green">星月德必WE"</span>概况
          </div>
        }
        style={{ backgroundImage: 'url(~@/assets/img/bg1.png)' }}
        full
      >
        <Img src="/images/map.png" />
      </Section>
      <Section
        hrefid="id1"
        full
        style={{ backgroundImage: 'url(/images/map.png)' }}
      >
        <div className="flex text-white">
          <div className="w-0 md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2"></div>
          <div
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2 py-16 px-20"
            style={{ backgroundColor: '#00C9D0' }}
          >
            <SectionTitle title1="区位交通" align="left" color="white" />
            <div className="pt-6 text-2xl">
              占位虹桥开放枢纽核心 多维立体交通打通商脉
            </div>
            <div className="pt-6">
              <div
                className="rounded-sm opacity-50 inline-block p-3"
                style={{ backgroundColor: '#0E8885' }}
              >
                点击查看区位图
              </div>
            </div>
            <div className="pt-6">
              {[1, 2, 3, 4].map((v) => (
                <div className="flex items-center my-3" key={v}>
                  <img className="w-16 h-16" src={icon1} alt="" />
                  <div className="flex-1 pl-2">
                    <div className="text-xl">专属班车</div>
                    <div className="text-base">
                      <div>上下班5分钟直达虹桥T2航站楼地铁站</div>
                      <div>上下班5分钟直达虹桥T2航站楼地铁站</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section
        className="pt-28"
        hrefid="id2"
        title1={
          <div>
            <span className="text-green">设计</span>理念
          </div>
        }
      >
        <div className="py-20">
          <Slider3 data={[s1, s1, s2, s2]} />
        </div>
        {/* <div className="flex flex-wrap mt-16">
          <div className="w-full lg:w-1/2">
            <Img width="100%" src={'/images/demo2.jpg'} />
          </div>
          <div
            style={{ backgroundColor: '#F0F5F5' }}
            className="w-full md:w-1/2 lg:w-1/4 py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 flex items-center px-5 md:px-5 lg:px-10 xl:px-16 xxl:px-20"
          >
            <div>
              <div className="text-3xl">500-2000㎡精装空间</div>
              <div className="text-lg mt-2" style={{ color: '#777' }}>
                灵活户型随需而变
              </div>
              <div
                style={{ width: 68, height: 4, background: '#3DB2AD' }}
                className="mt-12"
              ></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Img width="100%" src={'/images/demo.jpg'} />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div
            style={{ backgroundColor: '#3DB2AD' }}
            className="w-full lg:w-1/2 text-white py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24"
          >
            <div>
              <div className="text-3xl">前沿智能设施加持</div>
              <div className="text-lg mt-2">创享未来科技体验</div>
              <div
                style={{ width: 68, height: 4, background: '#fff' }}
                className="mt-12"
              ></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Img width="100%" src={'/images/demo.jpg'} />
          </div>
          <div
            style={{ backgroundColor: '#404445' }}
            className="w-full md:w-1/2 lg:w-1/4 text-white py-24 md:py-20 lg:py-12 xl:py-8 xxl:py-5 flex items-center pl-5 md:pl-5 lg:pl-10 xl:pl-16 xxl:pl-24"
          >
            <div>
              <div className="text-3xl">多层次生态空间</div>
              <div className="text-lg mt-2">滋生创意际遇</div>
              <div
                style={{ width: 68, height: 4, background: '#3DB2AD' }}
                className="mt-12"
              ></div>
            </div>
          </div>
        </div> */}
      </Section>
      <Section
        className="pt-28"
        hrefid="id2"
        title1={
          <div>
            <span className="text-green">办公</span>空间
          </div>
        }
      >
        <div className="py-32">
          <Slider2 data={[s1, s1, s2, s2]} />
        </div>
      </Section>
      <Section
        className="pt-28"
        hrefid="id3"
        title1={
          <div>
            <span className="text-green">生态</span>配套
          </div>
        }
        full
        desc={
          <div className="leading-10 my-5">
            <div>完善的生态商业供应链配套 类生活精致办公体验</div>
          </div>
        }
      >
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-1/2 relative">
            <Img width="100%" src={'/images/demo2.jpg'} />
            <div
              className="absolute bottom-0 w-full text-white text-3xl p-5 indent-3xl"
              style={{ background: '#00C9D0' }}
            >
              wehome智能会议厅
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 relative">
                <Img width="100%" src={'/images/demo.jpg'} />
                <div
                  className="absolute bottom-0 w-full text-white text-3xl p-5 indent-3xl"
                  style={{ background: '#00C9D0' }}
                >
                  睡眠舱
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <Img width="100%" src={'/images/demo.jpg'} />
                <div
                  className="absolute bottom-0 w-full text-white text-3xl p-5 indent-3xl"
                  style={{ background: '#00C9D0' }}
                >
                  睡眠舱
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2  relative">
                <Img width="100%" src={'/images/demo.jpg'} />
                <div
                  className="absolute bottom-0 w-full text-white text-3xl p-5 indent-3xl"
                  style={{ background: '#00C9D0' }}
                >
                  睡眠舱
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <Img width="100%" src={'/images/demo.jpg'} />
                <div
                  className="absolute bottom-0 w-full text-white text-3xl p-5 indent-3xl"
                  style={{ background: '#00C9D0' }}
                >
                  睡眠舱
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="pt-28"
        hrefid="id4"
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
            <span className="text-green">品牌</span>服务
          </div>
        }
        style={{ backgroundImage: 'url(~@/assets/img/bg1.png)' }}
        full
      >
        <Img src="/images/map.png" />
        {/* <div className="container mx-auto">
          <div className="flex flex-wrap p-5" style={{ background: '#162F33' }}>
            {[1, 2, 3, 4].map((v) => (
              <div
                key={v}
                className="relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w-1/4 p-2"
              >
                <div className="relative">
                  <Img width="100%" src={'/images/demo.jpg'} />
                  <div className="posWrap">
                    <div className="title">十大增值服务</div>
                    <div className="littleline"></div>
                    <div className="desc">
                      十大增值服务十大增值服务，十大增值服十大增值服务十大增值服务十大增值服务务
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <Slider5 data={[s1, s1, s2, s2]} />
      </Section>

      <Section
        id="id5"
        className="pt-28"
        title1={
          <div>
            <span className="text-green">租赁</span>信息
          </div>
        }
      >
        <ZuLin />
      </Section>
      <Footer />
      <div className="fixed right-0 top-1/2 z-10">
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-16 text-white text-center"
          style={{ backgroundColor: '#3DB2AD' }}
        >
          <span>预约参观</span>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-16 mt-1 text-white text-center"
          style={{ backgroundColor: '#3DB2AD' }}
        >
          <span>电话咨询</span>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-16 mt-1 text-white text-center"
          style={{ backgroundColor: '#3DB2AD' }}
        >
          <span>在线咨询</span>
        </div>
      </div>
    </main>
  );
}
