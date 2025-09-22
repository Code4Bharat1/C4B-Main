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
};

export default nextConfig;
