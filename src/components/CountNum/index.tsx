import { setLocale, useIntl } from 'umi';
import QueueAnim from 'rc-queue-anim';

const datas = [
  { icon: 'home1', count: '10年+', desc: '科技服务经验' },
  { icon: 'home2', count: '10年+', desc: '科技服务经验' },
  { icon: 'home3', count: '10年+', desc: '科技服务经验' },
  { icon: 'home4', count: '10年+', desc: '科技服务经验' },
  { icon: 'home5', count: '10年+', desc: '科技服务经验' },
];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <section className="bg-gray-200">
      <div className="container mx-auto">
        <QueueAnim delay={300} className="flex flex-wrap">
          {datas.map((v) => (
            <div
              key={v.icon}
              className="item flex w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 xxl:w-1/5 p-3 items-center"
            >
              <div className="icon">{v.icon}</div>
              <div className="flex-1">
                <div>{v.count}</div>
                <div>{v.desc}</div>
              </div>
            </div>
          ))}
        </QueueAnim>
      </div>
    </section>
  );
}
