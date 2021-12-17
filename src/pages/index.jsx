import { setLocale, useIntl } from 'umi';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import Slider2 from '@/components/Slider2';
import Slider3 from '@/components/Slider3';
import Slider5 from '@/components/Slider5';
import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';
import CountNum from '@/components/CountNum';
import ZuLin from '@/components/ZuLin';
import Img from '@/components/Img';
import OssImg from '@/components/OssImg';
import ProjectInfo from '@/components/ProjectInfo';

import s1 from '@/assets/slider/s1.png';
import s2 from '@/assets/slider/s2.png';

import fixmeet from '@/assets/fix_meet.png';
import fixtel from '@/assets/fix_tel.png';
import fixmsg from '@/assets/fix_msg.png';

import add1 from '@/assets/address/add1.png';
import add2 from '@/assets/address/add2.png';
import add3 from '@/assets/address/add3.png';

import regleft from '@/assets/regleft.png';
import regright from '@/assets/regright.png';

import './index.css';

export default function IndexPage() {
  const intl = useIntl();
  return (
    <main>
      <a href="" id="id0"></a>
      <Header />
      <Slider data={[s1, s2]} />

      <Parallax
        animation={{ x: 100, opacity: 0, playScale: [0.8, 0.99] }}
        style={{
          transform: 'translateX(0px)',
          opacity: 1,
          top: 300,
          zIndex: 99,
          position: 'absolute',
          right: '15%',
          width: '24rem',
        }}
        className="hidden lg:block xl:block 2xl:block"
      >
        <div className="container mx-auto relative">
          <div
            className=" z-10 p-3 rounded-lg"
            style={{
              backgroundColor: 'rgba(0, 201, 208, 0.52)',
            }}
          >
            <div
              className="bg-white px-10 py-12 w-full rounded-lg overflow-hidden"
              style={{
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
                  className="rounded-sm p-2 text-center w-full mt-4"
                  style={{
                    border: '1px solid #D1DDDD',
                  }}
                  type="text"
                  placeholder="请输入您的手机号"
                />
              </div>
              <div>
                <button
                  style={{ backgroundColor: '#00C9D0' }}
                  className="text-center text-base 2xl:text-lg p-2 text-white w-full mt-7"
                >
                  立即免费预约参观
                </button>
              </div>
              <div className="flex items-center justify-around text-center text-gray-400 mt-7 text-sm 2xl:text-base">
                <img className="w-6" src={regleft} alt="" />
                <span>我们的专业顾问会尽快与您联系</span>
                <img className="w-6" src={regleft} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* <Slider4 data={[s1, s1, s2, s2]} /> */}
      <CountNum />
      <Section
        hrefid="id1"
        style={{
          backgroundImage:
            'url(https://wehome-image.oss-cn-shanghai.aliyuncs.com/7ba38b255d101011f17d1bdb027c42c9.png)',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '22%',
        }}
        className="pt-20"
        desc={
          <div
            className="px-5 my-10 text-sm 2xl:text-base leading-6 2xl:leading-8"
            style={{ color: '#666' }}
          >
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
        full
      >
        <ProjectInfo />
      </Section>
      <Section hrefid="id2" full>
        <div className="flex text-white">
          <div
            className="w-0 md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage:
                'url(https://wehome-image.oss-cn-shanghai.aliyuncs.com/11af3e84c140117665bf8b1ef1660583.png)',
            }}
          ></div>
          <div
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2 py-8 px-8 xl:py-12 xl:px-20 2xl:py-16 2xl:px-24"
            style={{ backgroundColor: '#00C9D0' }}
          >
            <SectionTitle title1="区位交通" align="left" color="white" />
            <div className="pt-8 text-base lx:text-xl 2xl:text-2xl">
              占位虹桥开放枢纽核心 多维立体交通打通商脉
            </div>
            <div className="pt-10">
              <div
                className="rounded-sm opacity-50 inline-block p-3 text-sm 2xl:text-base"
                style={{ backgroundColor: '#0094A5', letterSpacing: 4 }}
              >
                点击查看区位图
              </div>
            </div>
            <div className="pt-4">
              <QueueAnim delay={300} reversed>
                <div key={'a'} className="flex items-center my-10">
                  <img
                    className="w-12 h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20"
                    src={add1}
                    alt=""
                  />
                  <div className="flex-1 pl-4">
                    <div className="text-lg xl:text-xl 2xl:text-2xl font-bold">
                      专属班车
                    </div>
                    <div className="text-xs lg:text-sm 2xl:text-base mt-1">
                      <div>上下班5分钟直达虹桥T2航站楼地铁站</div>
                    </div>
                  </div>
                </div>
                <div key={'b'} className="flex items-center my-10">
                  <img
                    className="w-12 h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20"
                    src={add2}
                    alt=""
                  />
                  <div className="flex-1 pl-4">
                    <div className="text-lg xl:text-xl 2xl:text-2xl font-bold">
                      轨道交通
                    </div>
                    <div className="text-xs lg:text-sm 2xl:text-base mt-1">
                      <div>虹桥火车站：2号线/10号线/17号线</div>
                      <div>虹桥T2航站楼：2号线/10号线</div>
                    </div>
                  </div>
                </div>
                <div key={'c'} className="flex items-center mt-10">
                  <img
                    className="w-12 h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20"
                    src={add3}
                    alt=""
                  />
                  <div className="flex-1 pl-4">
                    <div className="text-lg xl:text-xl 2xl:text-2xl font-bold">
                      公交线路
                    </div>
                    <div className="text-xs lg:text-sm 2xl:text-base mt-1">
                      <div>71路中运量、189/141/941路/虹桥商务区1、2路</div>
                    </div>
                  </div>
                </div>
              </QueueAnim>
            </div>
          </div>
        </div>
      </Section>
      <Section
        full
        className="pt-28"
        hrefid="id3"
        title1={
          <div>
            <span className="text-green">设计</span>理念
          </div>
        }
      >
        <div className="py-20 overflow-hidden hidden lg:block">
          <Slider3 data={[s1, s1, s2, s2]} />
        </div>
        <div className="py-20 overflow-hidden lg:hidden">
          <Slider2 />
        </div>
      </Section>
      <Section
        className="pt-28"
        full
        title1={
          <div>
            <span className="text-green">办公</span>空间
          </div>
        }
        desc={
          <div
            className="leading-8 px-5 my-10 text-sm 2xl:text-base"
            style={{ color: '#666' }}
          >
            <div>高品质精装全配，24小时无忧办公</div>
          </div>
        }
      >
        <div className="lg:w-4/5 mx-auto">
          <Slider2 />
        </div>
      </Section>
      <Section
        style={{
          backgroundImage:
            'url(https://wehome-image.oss-cn-shanghai.aliyuncs.com/3190d8bc478ec4b31b0eecb339700353.png)',
          backgroundPosition: 'right 1rem',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '25%',
        }}
        className="pt-12 lg:pt-20 xl:pt-28 2xl:pt-32"
        hrefid="id4"
        title1={
          <div>
            <span className="text-green">生态</span>配套
          </div>
        }
        full
        desc={
          <div className="leading-8 px-5 my-5 text-sm 2xl:text-base">
            <div>完善的生态商业供应链配套 类生活精致办公体验</div>
          </div>
        }
      >
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-1/2 relative">
            <OssImg width="100%" src={'0aed55856418022454767b5815c4d1e9.png'} />
            <div
              className="absolute bottom-0 w-full text-white text-base 2xl:text-2xl p-3 2xl:p-5 text-center"
              style={{ background: '#00C9D0' }}
            >
              wehome智能会议厅
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 relative">
                <OssImg
                  width="100%"
                  src={'71765038a896cc41ffb6527a0f3a3a8e.png'}
                />
                <div
                  className="absolute bottom-0 w-full text-white text-base 2xl:text-2xl p-3 2xl:p-5 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  睡眠舱
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <OssImg
                  width="100%"
                  src={'2ebec6c9dce48720310fd8d0163e0521.png'}
                />
                <div
                  className="absolute bottom-0 w-full text-white text-base 2xl:text-2xl p-3 2xl:p-5 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  多层次餐饮服务
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2  relative">
                <OssImg
                  width="100%"
                  src={'e217f33b4bf65e57319ba9a5dbf30896.png'}
                />
                <div
                  className="absolute bottom-0 w-full text-white text-base 2xl:text-2xl p-3 2xl:p-5 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  人脸识别门禁
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <OssImg
                  width="100%"
                  src={'0667876ac3587157d912f6168f6b267a.png'}
                />
                <div
                  className="absolute bottom-0 w-full text-white text-base 2xl:text-2xl p-3 2xl:p-5 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  共享健身空间
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="pt-28"
        hrefid="id5"
        desc={
          <div className="leading-10 my-5 px-5 relative">
            <div
              className="text-base 2xl:text-lg mt-3"
              style={{ color: '#222' }}
            >
              多元增值服务赋能企业 国际平台链接全球资源
            </div>
            <div
              className="text-xs 2xl:text-sm mt-2 leading-6 2xl:leading-7"
              style={{ color: '#666' }}
            >
              针对数字创新企业的成长发展和商务往来需求，依托德必集团十余年文科创产业服务体系、数十个全球产业园区及数千家入驻企业，助力企业跨城市布局，
              <br />
              推动企业之间互动联通，构建覆盖企业全生命周期的创新服务
            </div>
          </div>
        }
        title1={
          <div>
            <span className="text-green">品牌</span>服务
          </div>
        }
        style={{ backgroundColor: '#E9FCFD' }}
        full
      >
        <OssImg
          className="-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32 z-0"
          src="4f086a83cea70f65cfc6973e31cc1610.png"
        />

        <Slider5 />
      </Section>

      <Section
        hrefid="id6"
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
          className="text-xs xl:text-sm 2xl:text-sm w-16 xl:w-20 2xl:w-20 text-white text-center p-2"
          style={{ backgroundColor: '#00C9D0' }}
        >
          <img className="block w-2/3 mx-auto" src={fixmsg} alt="" />
          <span>预约参观</span>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-16 xl:w-20 2xl:w-20 mt-2 text-white text-center p-2"
          style={{ backgroundColor: '#00C9D0' }}
        >
          <a href="tel:021-62335008">
            <img className="block w-2/3 mx-auto" src={fixtel} alt="" />
            <span>电话咨询</span>
          </a>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-16 xl:w-20 2xl:w-20 mt-2 text-white text-center p-2"
          style={{ backgroundColor: '#00C9D0' }}
        >
          <img className="block w-2/3 mx-auto" src={fixmeet} alt="" />
          <span>在线咨询</span>
        </div>
      </div>
    </main>
  );
}
