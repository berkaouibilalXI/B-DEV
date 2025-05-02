/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "node", // or "node" if using ESM
  server: "./server.js", // optional, for a custom entry
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",

  };
  