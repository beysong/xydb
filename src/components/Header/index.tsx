import { setLocale, useIntl, getLocale } from 'umi';
import React, { useState } from 'react';
import logo from '@/assets/logo.png';
import './index.css';
const menus = [
  { id: 'menu.首页' },
  { id: 'menu.项目介绍' },
  { id: 'menu.区位交通' },
  { id: 'menu.设计理念' },
  { id: 'menu.品牌服务' },
  { id: 'menu.租赁信息' },
  { id: 'menu.联系我们' },
];

const handleQuickJump = (id, e) => {
  if (e) {
    e.preventDefault();
  }
  const node = document.querySelector(id);

  console.log('??', node, id);
  if (node) {
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};

export default function IndexPage() {
  const intl = useIntl();

  const [visible, setVisible] = useState(false);
  const [nowMenu, setNowMenu] = useState('');

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className=" container mx-auto flex items-center justify-between lg:justify-self-auto xl:justify-self-auto 2xl:justify-self-auto">
        <div className="logo">
          <img className="w-24 lg:w-28 xl:w-32 2xl:w-36" src={logo} />
        </div>
        <div
          id="menu-wrap"
          className={visible ? 'menu-wrap active' : 'menu-wrap'}
        >
          <ul className={'header-menu'}>
            {menus.map((v, i) => (
              <li
                key={v.id}
                className={nowMenu === v.id ? 'menu-item active' : 'menu-item'}
              >
                <a
                  href=""
                  onClick={(e) => {
                    setNowMenu(v.id);
                    handleQuickJump('#id' + i, e);
                  }}
                >
                  {intl.formatMessage({
                    id: v.id,
                  })}
                </a>
              </li>
            ))}

            <li className="menu-item">
              <a href="">
                <span
                  onClick={() => {
                    setLocale('zh-CN', true);
                  }}
                  className={getLocale() === 'zh-CN' ? 'text-green-600' : ''}
                >
                  中文
                </span>
                /
                <span
                  className={getLocale() === 'en-US' ? 'text-green-600' : ''}
                  onClick={() => {
                    setLocale('en-US', true);
                  }}
                >
                  EN
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="header-phone hidden items-center xl:flex 2xl:flex">
          <div className="header-phone-img">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAABHNCSVQICAgIfAhkiAAABJlJREFUWEe1WFFy0zAQ3Y3DTPtFOQHlBMAJaIaUIf0hHZpv0hOQnoBwAsoJCN8JQ/qTMDRM0xNQToA5AeWrzMTJspItZ63KttIGf3QaeyU97b59uxKC59OafHlNsOgi4CURHA52G1PPoTcyw7JRra9fHwFGHwDxkbRlcDUD7mAy7vG3+/o70QVUNPhwHsD5sNYIy9ZwfS8E1vo2bhPRO/bSlj2YgC6jYPPBsFa7VHZA8MEJQAHFSm8W0MkqIHOBFS6WICCAj4N6o61+HpyOOsAbQKCd+DN7GOGuAas2wl4/jiob79VmyrzoBPZyMmpWAD+XDVbfZwGw19zhiueBHSBsG5AKICIe9Z82VPhzHyew1unou82pvBmk1/JsmmdnW9Xob4cX66QAiY4Hu3tHeWPcwCZjXs//KfKanEUBvBNdDXnTT9R7XmQaBRv7rtCuBRgv8b5f32OO+T2tyeiYOfg6tqYhj923R64FmOLNoL53zw9WbJVNrusby+PY1Ljbb7HVPGbmVPrHAF6p3wug/U/1vaH5lgLTO5gHF/1nzy4OTsddRHjjA4qF9C0LbdfH1mXDiWacEPbrjQcZYDpr5lc/TRozsB0Gdlaw2A8W3l5U3ez5aFIR6ObZePvOHH5qthEdcaYy/5iB6o8SRwb1TqZ+y5WZROez6mbztmBsoCaksppoYEa3Mkou4i8myrj7puGzx2kZmf/9LbmGukhX5t+18SJ4rDim/s1Vf2GzLmBx1MZDps8L4xw0YWS1+9PfbWSKdet0zPVtWe80D0R9XC8wQ6dYejCNL8EJZ1dTLibT2byXPFgnsGwSQA1NurrSPhNmgeK2EpG3IZNwqtdjj41+q37LFjgzmI0V5x7Kyf6X1xhLyFjuK9lAidLVLuf3ZTdT+6Lwy+ilwPI8pjMm2Yk9qWyv18E3G5gOVRFvCrrZcBZsPF6X4KZ6qkOZ1KoyQouaZjunxzXucC0eS6pNTH4jbA65kIvJdHaEtLSQx13s1RsufR0m97Xu1RZ6lGHisNwrCksqxi73IBwW9fHX2nU+PXHdrZn1lvWafrHAbqOrThWFxSW6qfjm9PHZjjUjiCm4pMNhvuNUnbxMEU96Inebmw2pLrhTW9uWNjScBZuHS0+UtFDCcyqci0q0rRrGGJg4sPpIQOLlAnAQmmsEw+GiKKhDCXupJm2WHWyi8C4j16Qe4HgYcauMmfqbB1A2icomBZbpWkuIbCa3j2O3kQz7QJM5jEi3+4TUAMkl94pI5ZoZYDI8+ii/qNZM41i2hm4sCXt2/1Y2Tn7PBaaMtJBGwDc0cNf3nkGGlq8CeqoTXQWQsrUbUPe5ktOWKhGnLOo7L0Lo+t7SKPtVvWcTP0N+e4eOrAsXAN1P9cZHH2/E46+6y6sAxyhu5xdIbXnQNValN4qOwy9rlJKBynSw+/ykDKSiRnUOfEUan7jNw3w6iarQybvCKgVmeOeaPFkkZH6ENkB+15PeTa6i9HUpAwrLbhe9gC3JzbuPqMkdQpvfZdptl+eKrpnKPL0SMDmZDlEE25wa7AW+4kTaIsLkCpOlhqpTX6lxgfwHr6r0R+DQSHEAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <div>
            <div className="header-phone-title">Business invitation</div>{' '}
            <div className="header-phone-phone">029-82281515</div>
          </div>
        </div>
        <div
          onClick={() => {
            setVisible(!visible);
          }}
          className="lg:hidden xl:hidden 2xl:hidden"
        >
          <img style={{ width: 120 }} src={logo} />
        </div>
      </div>
    </header>
  );
}
