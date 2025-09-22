/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'], // Serve modern image formats
    deviceSizes: [320, 480, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },
  experimental: {
    optimizeCss: true,        // Automatically optimize CSS
    scrollRestoration: true,  // Improves UX on mobile
  },
  poweredByHeader: false,
  compress: true,             // Enable Gzip compression

  // ✅ Redirect www/non-www
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'code4bharat.com' }],
        destination: 'https://www.code4bharat.com/:1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
