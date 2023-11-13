/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
