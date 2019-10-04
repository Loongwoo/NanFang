export default config => {
  config.target('electron-renderer');

  // config.module
  //   .rule('svg')
  //   .test(/\.svg$/)
  //   .use('url-loader')
  //   .loader('url-loader')
  //   .options({
  //     limit: 150000,
  //     name: 'static/[name].[hash:8].[ext]',
  //   })
  //   .end()
  //   .use('@svgr/webpack')
  //   .loader('@svgr/webpack')
  //   .end();

  // console.log('loader', config.toString());
};
