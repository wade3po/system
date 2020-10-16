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
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/variable.scss";`,
      },
    },
  },
};
