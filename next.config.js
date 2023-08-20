/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ["flowbite.com", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
