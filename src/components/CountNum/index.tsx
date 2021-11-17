import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';

import icon1 from '@/assets/icon1.png';

const datas = [
  { icon: icon1, count: '10年+', desc: '科技服务经验' },
  { icon: icon1, count: '10年+', desc: '科技服务经验' },
  { icon: icon1, count: '10年+', desc: '科技服务经验' },
  { icon: icon1, count: '10年+', desc: '科技服务经验' },
  { icon: icon1, count: '10年+', desc: '科技服务经验' },
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section className="bg-gray-200">
      <div className="container mx-auto py-5">
        <QueueAnim delay={300} className="flex flex-wrap">
          {datas.map((v, i) => (
            <div
              key={i}
              className="item flex w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 p-3 items-center"
            >
              <div className="icon">
                <img className="w-16 h-16" src={v.icon} alt="" />
              </div>
              <div className="flex-1 pl-3">
                <div className="text-2xl">{v.count}</div>
                <div className="text-base">{v.desc}</div>
              </div>
            </div>
          ))}
        </QueueAnim>
      </div>
    </section>
  );
}
