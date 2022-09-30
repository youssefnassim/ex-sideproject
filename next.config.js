/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["london.ghost.io"],
  },
};

module.exports = nextConfig;
