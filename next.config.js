/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
  },
  compress: true,
  serverExternalPackages: ['drizzle-kit', 'esbuild', 'esbuild-register', '@libsql/client', 'sharp'],
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'onnxruntime-node$': false,
    };
    return config;
  },
};

module.exports = nextConfig;
