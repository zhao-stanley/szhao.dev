import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.szhao.dev",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);