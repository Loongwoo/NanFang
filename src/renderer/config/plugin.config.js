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
      title: "配电网多源信息故障诊断模拟软件",
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
