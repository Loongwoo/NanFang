export default [
  [
    "umi-plugin-react",
    {
      antd: true,
      dva: {
        dynamicImport: undefined,
        hmr: true,
      },
      // dynamicImport: {
      //   webpackChunkName: true,
      // },
      title: "南方电网",
      dll: true,
      hardSource: false,
      routes: {
        exclude: [/components\//],
      },
      locale: {
        default: "zh-CN",
        baseNavigator: false,
        antd: true,
      },
    },
  ],
];
