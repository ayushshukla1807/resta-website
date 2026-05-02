/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/studyhub',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'build_placeholder',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://studyhub-website.vercel.app',
  },
};

module.exports = nextConfig;
