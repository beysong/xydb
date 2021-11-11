import React from 'react';

export default ({ src, ...rest }: { src: string }) => {
  return <img {...rest} src={'/static01' + src} />;
};
