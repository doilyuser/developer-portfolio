import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    })

    return config
  },
  turbopack: {
    rules: {
      '*.pdf': ['file'],
    },
  },
  experimental: {
    optimizePackageImports: ['@/ui', '@/components', '@/hooks', '@/utils'],
  },
}

export default nextConfig
