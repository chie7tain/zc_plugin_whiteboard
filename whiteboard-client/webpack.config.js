const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "zuri-plugin-whiteboard",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  }
  });
};
