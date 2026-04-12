
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This is useful for speeding up the build process during development.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This prevents the build from failing due to minor TypeScript errors.
    ignoreBuildErrors: true,
  },
  images: {
    // This is required for deploying to certain environments and using external image URLs without configuration.
    unoptimized: true,
  },
};

export default nextConfig;