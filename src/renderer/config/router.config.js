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
          { path: '/low/demo1', name: 'demo1', component: `./Low/Demo1` },
          { path: '/low/demo2', name: 'demo2', component: `./Low/Demo2` },
          { path: '/low/rules', name: 'rules', component: `./Low/Rules` },
        ],
      },
      { path: '/middle', name: 'middle', component: `./Middle` },
      { path: '/real', name: 'real', component: `./Real` },
      { path: '/login', component: './Login' },
    ],
  },
];
