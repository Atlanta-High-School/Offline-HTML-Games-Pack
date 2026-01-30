/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for Vercel deployment
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Configure base path if needed (leave empty for root deployment)
  basePath: '',
  // Trailing slash for better compatibility
  trailingSlash: true,
}

module.exports = nextConfig
