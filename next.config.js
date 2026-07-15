/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    domains: ['localhost:3000', 'www.pngall.com'],
    unoptimized: true
  },
}

module.exports = nextConfig
