/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
  },
  turbopack: {
    root: process.cwd(), // This tells Turbopack to use the current directory as root
  },
};

module.exports = nextConfig;