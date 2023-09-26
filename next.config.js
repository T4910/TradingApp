/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ['bcrypt', '@mapbox']
    },
  };
  
  module.exports = nextConfig;