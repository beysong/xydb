import { setLocale, useIntl } from 'umi';
import React, { useState, useEffect } from 'react';
import { OverPack, Parallax } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import Slider2 from '@/components/Slider2';
import Slider3 from '@/components/Slider3';
import Slider32 from '@/components/Slider32';
import Slider5 from '@/components/Slider5';
import SectionTitle from '@/components/SectionTitle';
import Section from '@/components/Section';
import CountNum from '@/components/CountNum';
import ZuLin from '@/components/ZuLin';
import Img from '@/components/Img';
import OssImg from '@/components/OssImg';
import ProjectInfo from '@/components/ProjectInfo';
import Contact from '@/components/Contact';

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
import { getSingle, addEvent } from '@/utils';

import './index.css';

let popMapIns = null;

export default function IndexPage() {
  const intl = useIntl();
  const [isFrame, setIsFrame] = useState(false);
  const [showContact, setShowContact] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.innerWidth > 1024) {
        setShowContact(false);
      }
    };
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      // console.log('xxx2');
      window.removeEventListener('scroll', handleScroll, true);
    };
  });
  const popMap = getSingle(function () {
    const popDiv = document.createElement('div');
    const popImg = document.createElement('img');
    popImg.src =
      'https://wehome-image.oss-cn-shanghai.aliyuncs.com/2dc8058a10178bb2961da002793615e7.jpg';
    popImg.className = 'w-2/3 mx-auto';
    // popDiv.innerHTML = '我是登录浮窗';
    popDiv.appendChild(popImg);
    popDiv.style.background = 'rgba(0,0,0,0.3)';
    popDiv.style.zIndex = '999';
    popDiv.className =
      'w-full h-screen flex items-center justify-center fixed inset-0';

    addEvent(popDiv, 'click', function () {
      this.style.display = 'none';
    });

    document.body.appendChild(popDiv);
    return popDiv;
  });

  return (
    <main>
      <a href="" id="id0"></a>
      <Header />
      <Slider data={[s1, s2]} />

      <div
        style={{
          zIndex: 99,
        }}
        className={`fixed bg-gray-900 bg-opacity-20 md:bg-none top-0 bottom-0 items-center justify-center md:inset-auto md:top-1/3 w-full md:w-96 left-0 md:left-2/3 px-10 md:px-0 ${
          showContact ? ' flex md:block' : ' hidden'
        }`}
        onClick={() => {
          setShowContact(false);
        }}
      >
        <Contact
          onSubmit={() => {
            setShowContact(false);
          }}
        />
      </div>

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
            <div className="whitespace-pre-line">
              {intl.formatMessage({
                id: 'section1.con1',
              })}
            </div>
            <div>
              {intl.formatMessage({
                id: 'section1.con2',
              })}
            </div>
            <div>
              {intl.formatMessage({
                id: 'section1.con3',
              })}
            </div>
          </div>
        }
        title1={
          <div>
            <span className="text-green">
              {intl.formatMessage({
                id: 'title.星月德必WE"',
              })}
            </span>
            {intl.formatMessage({
              id: 'title.概况',
            })}
          </div>
        }
        full
      >
        <ProjectInfo />
      </Section>
      <Section hrefid="id2" full>
        <div className="flex flex-wrap flex-col-reverse md:flex-row text-white">
          <div
            className="w-full h-96 md:h-auto md:w-1/2 lg:w-1/2 xl:w-1/2 xxl:w-1/2"
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
            <SectionTitle
              title1={intl.formatMessage({
                id: 'title.区位交通',
              })}
              align="left"
              color="white"
            />
            <div className="pt-6 xl:pt-8 text-base lx:text-xl 2xl:text-2xl">
              {intl.formatMessage({
                id: 'section2.con1',
              })}
            </div>
            <div className="pt-10">
              <div
                className="mapBtn"
                style={{ backgroundColor: '#0094A5', letterSpacing: 4 }}
                onClick={() => {
                  if (popMapIns) {
                    popMapIns.style.display = 'flex';
                  } else {
                    popMapIns = popMap();
                  }
                }}
              >
                {intl.formatMessage({
                  id: 'section2.点击查看区位图',
                })}
              </div>
            </div>
            <div className="xl:pt-4">
              <QueueAnim delay={300} reversed>
                <div key={'a'} className="flex items-center my-10">
                  <img
                    className="w-12 h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20"
                    src={add1}
                    alt=""
                  />
                  <div className="flex-1 pl-4">
                    <div className="text-base xl:text-xl 2xl:text-2xl font-bold">
                      {intl.formatMessage({
                        id: 'section2.专属班车',
                      })}
                    </div>
                    <div className="text-xs lg:text-sm 2xl:text-base mt-1">
                      <div>
                        {intl.formatMessage({
                          id: 'section2.上下班5分钟直达虹桥T2航站楼地铁站',
                        })}
                      </div>
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
                    <div className="text-base xl:text-xl 2xl:text-2xl font-bold">
                      {intl.formatMessage({
                        id: 'section2.轨道交通',
                      })}
                    </div>
                    <div className="text-xs lg:text-sm 2xl:text-base mt-1">
                      <div>
                        {intl.formatMessage({
                          id: 'section2.con2',
                        })}
                      </div>
                      <div>
                        {intl.formatMessage({
                          id: 'section2.con3',
                        })}
                      </div>
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
                    <div className="text-base xl:text-xl 2xl:text-2xl font-bold">
                      {intl.formatMessage({
                        id: 'section2.公交线路',
                      })}
                    </div>
                    <div className="text-xs lg:text-sm 2xl:text-base mt-1">
                      <div>
                        {intl.formatMessage({
                          id: 'section2.con4',
                        })}
                      </div>
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
        className="pt-20"
        hrefid="id3"
        title1={
          <div>
            <span className="text-green">
              {intl.formatMessage({
                id: 'title.设计',
              })}
            </span>
            {intl.formatMessage({
              id: 'title.理念',
            })}
          </div>
        }
      >
        <div className="pt-10 lg:pt-20 lg:pb-16 xl:pb-24 2xl:pb-32 overflow-hidden hidden lg:block">
          <Slider3 data={[s1, s1, s2, s2]} />
        </div>
        <div className="pt-10 lg:pt-20 overflow-hidden lg:hidden">
          <Slider32 />
        </div>
      </Section>
      <Section
        className="pt-20"
        full
        title1={
          <div>
            <span className="text-green">
              {intl.formatMessage({
                id: 'title.办公',
              })}
            </span>
            {intl.formatMessage({
              id: 'title.空间',
            })}
          </div>
        }
        desc={
          <div
            className="leading-8 px-5 my-10 text-sm 2xl:text-base"
            style={{ color: '#666' }}
          >
            <div>
              {intl.formatMessage({
                id: 'section4.con1',
              })}
            </div>
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
            <span className="text-green">
              {intl.formatMessage({
                id: 'title.生态',
              })}
            </span>
            {intl.formatMessage({
              id: 'title.配套',
            })}
          </div>
        }
        full
        desc={
          <div className="leading-8 px-5 my-5 text-sm 2xl:text-base">
            <div>
              {intl.formatMessage({
                id: 'section5.con1',
              })}
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-1/2 relative">
            <OssImg width="100%" src={'0aed55856418022454767b5815c4d1e9.png'} />
            <div
              className="absolute bottom-0 w-full text-white text-base xl:text-lg 2xl:text-xl p-2 xl:p-3 text-center"
              style={{ background: '#00C9D0' }}
            >
              {intl.formatMessage({
                id: 'section5.wehome智能会议厅',
              })}
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
                  className="absolute bottom-0 w-full text-white text-base xl:text-lg 2xl:text-xl p-2 xl:p-3 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  {intl.formatMessage({
                    id: 'section5.睡眠舱',
                  })}
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <OssImg
                  width="100%"
                  src={'2ebec6c9dce48720310fd8d0163e0521.png'}
                />
                <div
                  className="absolute bottom-0 w-full text-white text-base xl:text-lg 2xl:text-xl p-2 xl:p-3 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  {intl.formatMessage({
                    id: 'section5.多层次餐饮服务',
                  })}
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
                  className="absolute bottom-0 w-full text-white text-base xl:text-lg 2xl:text-xl p-2 xl:p-3 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  {intl.formatMessage({
                    id: 'section5.人脸识别门禁',
                  })}
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <OssImg
                  width="100%"
                  src={'0667876ac3587157d912f6168f6b267a.png'}
                />
                <div
                  className="absolute bottom-0 w-full text-white text-base xl:text-lg 2xl:text-xl p-2 xl:p-3 text-center"
                  style={{ background: '#00C9D0' }}
                >
                  {intl.formatMessage({
                    id: 'section5.共享健身空间',
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="pt-20"
        hrefid="id5"
        desc={
          <div className="leading-10 my-5 px-5 relative">
            <div
              className="text-base 2xl:text-lg mt-3"
              style={{ color: '#222' }}
            >
              {intl.formatMessage({
                id: 'section6.con1',
              })}
            </div>
            <div
              className="text-xs 2xl:text-sm mt-2 leading-6 2xl:leading-7 whitespace-pre-line"
              style={{ color: '#666' }}
            >
              {intl.formatMessage({
                id: 'section6.con2',
              })}
            </div>
          </div>
        }
        title1={
          <div>
            <span className="text-green">
              {intl.formatMessage({
                id: 'title.品牌',
              })}
            </span>
            {intl.formatMessage({
              id: 'title.服务',
            })}
          </div>
        }
        style={{ backgroundColor: '#E9FCFD' }}
        full
      >
        <div className="container mx-auto">
          <OssImg className="z-0" src="8b29a2213f35a062c978bef867f946df.jpg" />
        </div>

        <Slider5 />
      </Section>

      <Section
        hrefid="id6"
        className="pt-20"
        title1={
          <div>
            <span className="text-green">
              {intl.formatMessage({
                id: 'title.租赁',
              })}
            </span>
            {intl.formatMessage({
              id: 'title.信息',
            })}
          </div>
        }
      >
        <ZuLin />
      </Section>
      <Footer />
      <div className="fixed right-0 top-1/2 z-10">
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-14 xl:w-24 text-white text-center p-2 cursor-pointer"
          style={{ backgroundColor: '#00C9D0' }}
          onClick={() => {
            setShowContact(!showContact);
          }}
        >
          <img className="block w-2/3 mx-auto" src={fixmsg} alt="" />
          <span className="hidden md:inline">
            {intl.formatMessage({
              id: 'footer.预约参观',
            })}
          </span>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-14 xl:w-24 mt-2 text-white text-center p-2"
          style={{ backgroundColor: '#00C9D0' }}
        >
          <a href="tel:021-62335008">
            <img className="block w-2/3 mx-auto" src={fixtel} alt="" />
            <span className="hidden md:inline">
              {intl.formatMessage({
                id: 'footer.电话咨询',
              })}
            </span>
          </a>
        </div>
        <div
          className="text-xs xl:text-sm 2xl:text-sm w-14 xl:w-24 mt-2 text-white text-center p-2 cursor-pointer"
          style={{ backgroundColor: '#00C9D0' }}
          onClick={() => {
            let iframe = document.querySelector('.iframe');
            if (!isFrame) {
              iframe.setAttribute(
                'src',
                'https://im1c5366d.7x24cc.com/phone_webChat.html?accountId=N000000031971&chatId=5ba0492b-7f47-454f-a6b9-415da15e8c68',
              );
            } else {
              iframe.removeAttribute('src');
            }
            setIsFrame(!isFrame);
          }}
        >
          <img className="block w-2/3 mx-auto" src={fixmeet} alt="" />
          <span className="hidden md:inline">
            {intl.formatMessage({
              id: 'footer.在线咨询',
            })}
          </span>
          <div
            className={`fixed top-1/2 w-80 h-3/5 transform -translate-y-1/2 right-20 ${
              isFrame ? 'block' : 'hidden'
            }`}
          >
            <iframe
              src=""
              frameBorder="0"
              className="iframe w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
