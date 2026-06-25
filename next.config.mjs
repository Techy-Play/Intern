import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.1.30', '192.168.56.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spadewp.wpenginepowered.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
