const withImages = require('next-images')
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = withImages({
    webpack(config, options) {
        if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
          } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
          }

          return config;
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true
    }
  })
