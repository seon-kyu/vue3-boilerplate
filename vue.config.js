/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_variables.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        PROJECT_BUILD_DATE: JSON.stringify(new Date().toISOString()),
      }),
    ],
  },
};
