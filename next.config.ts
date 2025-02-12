import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['src', 'app', 'components', 'lib', 'utils'],
  },
};

export default nextConfig;
