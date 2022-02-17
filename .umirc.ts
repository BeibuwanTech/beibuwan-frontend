import { defineConfig } from 'umi';

export default defineConfig({
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
