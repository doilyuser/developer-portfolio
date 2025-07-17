import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,

  webpack(config, { dev, isServer }) {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    })

    // `poll: 1000`:            Checks for file changes every 1000ms (1 second) instead of using native file system events
    // `aggregateTimeout: 300`: Waits 300ms after detecting changes before rebuilding
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }

    return config
  },
  turbopack: {
    rules: {
      '*.pdf': ['file'],
    },
  },
  experimental: {
    optimizePackageImports: ['@/ui', '@/components', '@/hooks', '@/utils', '@/components/icons'],
  },
}

export default nextConfig
