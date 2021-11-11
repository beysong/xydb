import { setLocale, useIntl } from 'umi';

import './index.css';
const menus = [{ id: 'home' }, { id: 'project' }];
export default function IndexPage() {
  const intl = useIntl();
  return (
    <footer className="footer bg-green-600 p-10">
      <div className="container mx-auto">
        <div className="p-10">
          <div className="bg-white rounded-lg flex p-10">
            <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
              <div>联系我们</div>
              <div>联系我们</div>
              <div>联系我们</div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2">
              <div>
                <input type="text" placeholder="请输入您的姓名" />
              </div>
              <div>
                <input type="text" placeholder="请输入您的手机号" />
              </div>
              <div>
                <button>立即免费预约参观</button>
              </div>
              <div>垃圾水电费</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
