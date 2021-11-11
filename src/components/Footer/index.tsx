import { setLocale, useIntl } from 'umi';

import './index.css';
const menus = [{ id: 'home' }, { id: 'project' }];
export default function IndexPage() {
  const intl = useIntl();
  return (
    <footer className="footer bg-green-600 p-10 text-white">
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
      <div>footer</div>
    </footer>
  );
}
