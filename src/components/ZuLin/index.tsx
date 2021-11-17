import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import icon1 from '@/assets/icon1.png';

const datas = [
  { icon: icon1, count: '10㎡', desc: '总面积' },
  { icon: icon1, count: '101㎡', desc: '分隔面积' },
  { icon: icon1, count: '3㎡', desc: '原高' },
  { icon: icon1, count: '精装', desc: '交付标准' },
  { icon: icon1, count: '停车场', desc: '供应' },
  { icon: icon1, count: 'WiFi', desc: '全区域覆盖' },
  { icon: icon1, count: 'VRV', desc: '24小时在线' },
  { icon: icon1, count: '园区管理', desc: '24小时在线' },
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
                  <img className="w-12 h-12 inline-block" src={v.icon} alt="" />
                </div>
                <div className="font-bold text-lg">{v.count}</div>
                <div className="text-xs">{v.desc}</div>
              </div>
            ))}
          </QueueAnim>
        </ScrollOverPack>
      </div>
    </section>
  );
}
