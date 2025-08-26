/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Sample-repo',
  assetPrefix: '/Sample-repo/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
