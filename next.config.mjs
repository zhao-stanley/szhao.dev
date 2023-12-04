import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.szhao.dev"],
  },
};

export default withPlaiceholder(nextConfig);
