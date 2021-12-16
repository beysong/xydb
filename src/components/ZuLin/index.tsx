import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import ico1 from '@/assets/foot/ico1.png';
import ico2 from '@/assets/foot/ico2.png';
import ico3 from '@/assets/foot/ico3.png';
import ico4 from '@/assets/foot/ico4.png';
import ico5 from '@/assets/foot/ico5.png';
import ico6 from '@/assets/foot/ico6.png';
import ico7 from '@/assets/foot/ico7.png';
import ico8 from '@/assets/foot/ico8.png';

const datas = [
  { icon: ico1, count: '10㎡', desc: '总面积' },
  { icon: ico2, count: '101㎡', desc: '分隔面积' },
  { icon: ico3, count: '3㎡', desc: '原高' },
  { icon: ico4, count: '精装', desc: '交付标准' },
  { icon: ico5, count: '停车场', desc: '供应' },
  { icon: ico6, count: 'WiFi', desc: '全区域覆盖' },
  { icon: ico7, count: 'VRV', desc: '24小时在线' },
  { icon: ico8, count: '园区管理', desc: '24小时在线' },
];

export default function IndexPage() {
  const intl = useIntl();
  const Wrap = (props) => (
    <div className="grid grid-cols-4 lg:grid-cols-8" {...props}></div>
  );
  return (
    <section className="mb-28 mt-16" style={{ minHeight: 80 }}>
      <div className="container mx-auto">
        <ScrollOverPack playScale="0.1">
          <QueueAnim key="queue" type="bottom" component={Wrap} leaveReverse>
            {datas.map((v) => (
              <div key={v.icon} className="text-center">
                <div className="icon m-5">
                  <img
                    className=" w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 inline-block"
                    src={v.icon}
                    alt=""
                  />
                </div>
                <div className="font-bold text-sm xl:text-base 2xl:text-lg">
                  {v.count}
                </div>
                <div className="text-xs">{v.desc}</div>
              </div>
            ))}
          </QueueAnim>
        </ScrollOverPack>
      </div>
    </section>
  );
}
