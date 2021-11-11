import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/static01/',
  publicPath: '/static01/',
  fastRefresh: {},
  locale: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.development.js',
        ]
      : [
          'https://gw.alipayobjects.com/os/lib/react/17.0.2/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/17.0.2/umd/react-dom.production.min.js',
        ],
  extraPostCSSPlugins: [
    require('postcss-import'),
    require('tailwindcss')({
      config: './tailwind.config.js',
    }),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
});
