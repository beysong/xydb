import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const datas = [
  { icon: 'home1', count: '10㎡', desc: '总面积' },
  { icon: 'home2', count: '101㎡', desc: '分隔面积' },
  { icon: 'home3', count: '3㎡', desc: '原高' },
  { icon: 'home4', count: '精装', desc: '交付标准' },
  { icon: 'home5', count: '停车场', desc: '供应' },
  { icon: 'home51', count: 'WiFi', desc: '全区域覆盖' },
  { icon: 'home52', count: 'VRV', desc: '24小时在线' },
  { icon: 'home53', count: '园区管理', desc: '24小时在线' },
];

export default function IndexPage() {
  const intl = useIntl();
  const Wrap = (props) => (
    <div className="grid grid-cols-4 lg:grid-cols-8" {...props}></div>
  );
  return (
    <section className="" style={{ minHeight: 80 }}>
      <div className="container mx-auto">
        <ScrollOverPack playScale="0.1">
          <QueueAnim key="queue" type="bottom" component={Wrap} leaveReverse>
            {datas.map((v) => (
              <div key={v.icon} className="text-center">
                <div className="icon">{v.icon}</div>
                <div className="font-bold">{v.count}</div>
                <div>{v.desc}</div>
              </div>
            ))}
          </QueueAnim>
        </ScrollOverPack>
      </div>
    </section>
  );
}
