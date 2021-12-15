import { setLocale, useIntl } from 'umi';

import logo from '@/assets/foot_logo.png';

import './index.css';
const menus = [{ id: 'home' }, { id: 'project' }];

export default function IndexPage() {
  const intl = useIntl();
  return (
    <footer
      className="footer py-24"
      style={{
        background: '#34A09B',
        backgroundImage:
          'url(https://wehome-image.oss-cn-shanghai.aliyuncs.com/4430e1782ef3a3e2e743bcc660e008b9.png)',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto">
        <div className="p-0 lg:p-12 xl:p-12 2xl:p-12">
          <div className="bg-white rounded-lg flex flex-wrap p-12 lg:p-28 xl:p-28 2xl:p-28">
            <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
              <div>
                <img src={logo} className="w-2/5" alt="" />
              </div>
              <div className="mt-6">
                <div className="text-base">欢迎咨询</div>
                <div className="text-2xl" style={{ color: '#C8171E' }}>
                  021-62335008
                </div>
              </div>
              <div className="mt-6">
                <div className="text-base">项目地址</div>
                <div className="text-2xl mt-1">上海市闵行区丰虹路199号</div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 mt-20 lg:mt-0 xl:mt-0 2xl:mt-0">
              <div>
                <input
                  className="p-3 w-full"
                  style={{
                    border: '1px solid #DFEBEB',
                  }}
                  type="text"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <input
                  className="p-3 w-full mt-5"
                  style={{
                    border: '1px solid #DFEBEB',
                  }}
                  type="number"
                  placeholder="请输入您的手机号"
                />
              </div>
              <div>
                <button
                  className="p-3 mt-10 text-white text-lg w-full"
                  style={{
                    background: '#00C9D0',
                  }}
                >
                  立即免费预约参观
                </button>
              </div>
              <div className="text-center mt-3" style={{ color: '#00C9D0' }}>
                我们的专业顾问会尽快与您联系
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
