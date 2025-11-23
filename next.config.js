/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack configuration (next.js 16+)
  turbopack: {
    resolveAlias: {
      canvas: false,
    },
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects for legacy routes
  async redirects() {
    return [];
  },

  // Rewrites for API routes
  async rewrites() {
    return {
      beforeFiles: [],
    };
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://archduke.is-a.dev',
  },

  // Typescript strict mode
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Enable React strict mode for development
  reactStrictMode: true,

  // PWA support
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
