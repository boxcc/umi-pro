import { resolve } from 'path';

export default {
  // proxy: {
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '' },
  //   },
  // },
  alias: {
    src: resolve(__dirname, 'src'),
    assets: resolve(__dirname, 'src/assets'),
    common: resolve(__dirname, 'src/common'),
    components: resolve(__dirname, 'src/components'),
    layouts: resolve(__dirname, 'src/layouts'),
    models: resolve(__dirname, 'src/models'),
    pages: resolve(__dirname, 'src/pages'),
    plugins: resolve(__dirname, 'src/plugins'),
    services: resolve(__dirname, 'src/services'),
    utils: resolve(__dirname, 'src/utils'),

  },
  ignoreMomentLocale: true,
};
