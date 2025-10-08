/** @type {import('@vite-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js", // ✅ สำคัญ
  server: true,
  serverModuleFormat: "esm",         // ✅ ใช้ ES Module
};