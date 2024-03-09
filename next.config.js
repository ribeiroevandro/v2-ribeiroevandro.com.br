/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  output: "export",
  compress: false,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
