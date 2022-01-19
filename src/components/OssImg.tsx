import React from 'react';
const host = 'https://wehome-image.oss-cn-shanghai.aliyuncs.com/';

export default ({ src, ...rest }: { src: string }) => {
  return <img {...rest} src={host + src} />;
};
