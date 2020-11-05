module.exports = {
  devServer: {
    proxy: {
      "/adminapi": {
        target: process.env.BASE_API_URL,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/adminapi": "adminapi",
        },
      },
    },
  },
  publicPath: '/system',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/variable.scss";`,
      },
    },
  },
};
