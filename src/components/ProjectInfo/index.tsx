import React from 'react';

import meto1 from './imgs/meto1.png';
import meto2 from './imgs/meto2.png';

import logo from '@/assets/logo.png';

import './index.css';

export default () => (
  <div className="container mx-auto relative">
    <div className="pbg">
      <div className="dian dian1">
        <div className="dian-tit">龙湖虹桥天街</div>
      </div>
      <div className="dian dian2">
        <div className="dian-tit">新华联购物中心</div>
      </div>

      <div className="meto meto1">
        <div className="meto-tit">虹桥火车站</div>
      </div>

      <div className="dian dian3">
        <div className="dian-tit">
          <img src={logo} className="w-36" alt="" />
          <div className="text-gray-600 text-xs mt-1">
            长三角数字科技创新中心
          </div>
        </div>
      </div>

      <div className="meto meto2">
        <div className="meto-tit">
          虹桥2号
          <br />
          航站楼
        </div>
      </div>

      <div className="dian dian4">
        <div className="dian-tit">上海虹桥国际机场</div>
      </div>
      <div className="dian dian5">
        <div className="dian-tit">上海动物园</div>
      </div>
    </div>
  </div>
);
