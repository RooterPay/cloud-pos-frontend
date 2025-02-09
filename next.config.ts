import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '',
  assetPrefix: '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
