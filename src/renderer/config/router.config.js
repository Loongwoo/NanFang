export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/low' },
      {
        path: '/low',
        name: 'low',
        routes: [
          { path: '/low', redirect: '/low/demo1' },
          { path: '/low/demo1', name: 'demo1', component: `./Low/Demo3` },
          { path: '/low/demo2', name: 'demo2', component: `./Low/Demo4` },
          // { path: '/low/rules', name: 'rules', component: `./Low/Rules` },
        ],
      },
      {
        path: '/middle',
        name: 'middle',
        routes: [
          { path: '/middle', redirect: '/middle/liantang' },
          {
            path: '/middle/liantang',
            name: 'liantang',
            component: `./Middle/LianTang`,
          },
        ],
      },
      // { path: '/real', name: 'real', component: `./Real` },
      { path: '/login', component: './Login' },
    ],
  },
];
