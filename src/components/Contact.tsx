import React, { useState } from 'react';
import { setLocale, useIntl } from 'umi';

import regleft from '@/assets/regleft.png';
import regright from '@/assets/regright.png';

export default ({ onSubmit }) => {
  const intl = useIntl();
  const [tel, setTel] = useState();
  const [name, setName] = useState();
  return (
    <div
      className="container mx-auto relative"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
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
              placeholder={intl.formatMessage({
                id: 'footer.请输入您的姓名',
              })}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="rounded-sm p-2 text-center w-full mt-4"
              style={{
                border: '1px solid #D1DDDD',
              }}
              type="number"
              placeholder={intl.formatMessage({
                id: 'footer.请输入您的手机号',
              })}
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                if (tel?.length !== 11) {
                  alert('手机号格式不正确');
                  return;
                }
                fetch(
                  'http://open-api.wehome.net.cn/standard_project/wehome/open_dobe_web_order_create',
                  {
                    method: 'POST',
                    body: JSON.stringify({
                      tel,
                      name,
                      room_id: 7319,
                    }),
                  },
                ).then(() => {
                  onSubmit();
                });
              }}
              style={{ backgroundColor: '#00C9D0' }}
              className="text-center text-base 2xl:text-lg p-2 text-white w-full mt-7"
            >
              {intl.formatMessage({
                id: 'footer.立即免费预约参观',
              })}
            </button>
          </div>
          <div className="flex items-center justify-around text-center text-gray-400 mt-7 text-sm 2xl:text-base">
            <img className="w-6" src={regleft} alt="" />
            <span>
              {intl.formatMessage({
                id: 'footer.我们的专业顾问会尽快与您联系',
              })}
            </span>
            <img className="w-6" src={regright} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
