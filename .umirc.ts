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
    { path: '/login', component: '@/pages/login' },
    { path: '/register', component: '@/pages/login' },
    { path: '/technology/market', component: '@/pages/technology/market' },
    { path: '/technology/achivement', component: '@/pages/technology/achivement' },
    { path: '/demo', component: '@/pages/demo' },
  ],
  fastRefresh: {},
  dynamicImport: {
    loading: '@/components/Loading',
  },
  exportStatic: {},
});
