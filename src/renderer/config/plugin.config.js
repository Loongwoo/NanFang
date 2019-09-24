export default [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        dynamicImport: undefined,
        hmr: true,
      },
      // dynamicImport: {
      //   webpackChunkName: true,
      // },
      title: '没有名字',
      dll: true,
      hardSource: false,
      routes: {
        exclude: [/components\//],
      },
      locale: {
        default: 'zh-CN',
        baseNavigator: false,
        antd: true,
      },
    },
  ],
];
