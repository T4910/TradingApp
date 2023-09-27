/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ['bcrypt', 'bcryptjs']
    },
  };
  
  module.exports = nextConfig;