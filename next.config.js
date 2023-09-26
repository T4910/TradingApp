/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverActions: true,
      serverComponentsExternalPackages: ['bcrypt', '@mapbox']
    },
  };
  
  module.exports = nextConfig;