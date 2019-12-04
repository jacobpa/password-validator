module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/global.scss";',
      },
    },
  },
  pwa: {
    name: 'Ladno Password Generator',
    themeColor: '#001F3F',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#001F3F',
    manifestOptions: {
      short_name: 'Ladno Pass',
      display: 'standalone',
      icons: [
        {
          src: 'img/icons/icon@256px.png',
          sizes: '256x256',
          type: 'image/png',
        },
      ],
    },
    iconPaths: {
      favicon16: 'img/icons/icon@16px.png',
      favicon32: 'img/icons/icon@32px.png',
      appleTouchIcon: 'img/icons/icon@256px.png',
      maskIcon: '',
      msTileImage: '',
    },
  },
};
