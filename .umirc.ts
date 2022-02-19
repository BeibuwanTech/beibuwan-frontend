import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api': {
      'target': 'http://localhost:7001',
      'changeOrigin': true,
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/demo', component: '@/pages/demo' },
    { path: '/register', component: '@/pages/register' },
  ],
  fastRefresh: {},
  dynamicImport: {},
  exportStatic: {},
});
