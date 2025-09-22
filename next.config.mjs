/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,           // Helps catch potential issues
  swcMinify: true,                 // Minify JS using Next.js SWC compiler
  images: {
    formats: ['image/avif', 'image/webp'], // Serve modern formats automatically
    deviceSizes: [320, 480, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },
  experimental: {
    optimizeCss: true,             // Automatically optimize and minify CSS
    scrollRestoration: true,       // Improves user experience on mobile
  },
  poweredByHeader: false,          // Removes X-Powered-By header
  compress: true,                  // Enable Gzip compression
};

export default nextConfig;
