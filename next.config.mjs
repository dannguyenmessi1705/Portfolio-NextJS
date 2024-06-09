import removeImports from "next-remove-imports";
// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i2cyjyqqpqfhs8o3.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
/** @type {function(import("next").NextConfig): import("next").NextConfig}} */
const removeImportsFun = removeImports({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: "\\.(less|css|scss|sass|styl)$",
});

export default removeImportsFun(nextConfig);
// const removeImportsConfig = {
//   webpack: function (config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: "raw-loader",
//     });
//     return config;
//   },
// };
// const removeImports = require("next-remove-imports")(removeImportsConfig);
// module.exports = removeImports(nextConfig);
