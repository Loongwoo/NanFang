const pageArr = [
  'low',
  'middle',
  'real',
  // { name: 'find', icon: 'global', routes: ['recommend', 'rank', 'category'] },
  // {
  //   name: 'my',
  //   icon: 'user',
  //   routes: ['subscribed', 'listened', 'bought', 'like'],
  // },
];

const routes = pageArr.map(route => {
  if (typeof route === 'object') {
    const { name, icon, routes: subRoutes } = route;
    const newRoute = {
      path: `/${name}`,
      name,
      icon,
      routes: subRoutes.map(subRoute => {
        const subComponent = subRoute[0].toUpperCase() + subRoute.slice(1);
        return {
          path: `/${name}/${subRoute}`,
          name: subRoute,
          component: `./${subComponent}`,
        };
      }),
    };
    if (name === 'my') {
      newRoute.component = '../layouts/MyLayout';
    }
    return newRoute;
  }
  const component = route[0].toUpperCase() + route.slice(1);
  return {
    path: `/${route}`,
    name: route,
    component: `./${component}`,
  };
});
routes.unshift({ path: '/', redirect: '/low' });

routes.push(
  {
    path: '/login',
    component: './Login',
  }
  // {
  //   path: '/setting',
  //   component: './Setting',
  // }
  // {
  //   path: '/search/:kw',
  //   component: './SearchResult',
  // },
  // {
  //   path: '/category/:cat/:subCat',
  //   component: './CategoryDetail',
  // },
  // {
  //   path: '/:category/:id',
  //   component: './AlbumDetail',
  // }
);

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
