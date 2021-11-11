import { setLocale, useIntl } from 'umi';
import SectionTitle from '../SectionTitle';

import './index.css';
const menus = [{ id: 'home' }, { id: 'project' }];
export default function IndexPage({
  desc = '',
  children,
  className = '',
  title1,
  full = false,
  hrefid = '',
  ...rest
}) {
  const intl = useIntl();
  return (
    <section className={'bg-gray-100 ' + className} {...rest}>
      <a className="wow hidden" id={hrefid}></a>
      <div className={full ? 'w-full' : 'container mx-auto'}>
        <SectionTitle title1={title1} align="center" />
        {desc ? <div className="text-center">{desc}</div> : false}
        {children}
      </div>
    </section>
  );
}
